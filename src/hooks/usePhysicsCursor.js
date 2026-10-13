import { useEffect, useRef } from 'react';

export function usePhysicsCursor() {
  const animFrameRef = useRef(null);

  useEffect(() => {
    // Disable on touch / mobile devices for native clean mobile touch UX
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');
    const cursorText = document.getElementById('cursor-text');

    if (!cursorDot || !cursorOutline) return;

    let mouseX = -100;
    let mouseY = -100;
    let targetX = -100;
    let targetY = -100;
    let outlineX = -100;
    let outlineY = -100;
    let velX = 0;
    let velY = 0;
    let currentAngle = 0;
    let currentScaleX = 1;
    let currentScaleY = 1;
    let isVisible = false;
    let isMagnetic = false;
    let magneticTarget = null;

    let lastParticleTime = 0;
    let lastParticleX = 0;
    let lastParticleY = 0;

    const spawnTrailParticle = (x, y) => {
      const now = performance.now();
      const dist = Math.hypot(x - lastParticleX, y - lastParticleY);

      if (now - lastParticleTime > 35 && dist > 18) {
        lastParticleTime = now;
        lastParticleX = x;
        lastParticleY = y;

        const particle = document.createElement('div');
        particle.className = 'cursor-trail-particle';
        const offsetX = (Math.random() - 0.5) * 8;
        const offsetY = (Math.random() - 0.5) * 8;
        particle.style.left = `${x + offsetX}px`;
        particle.style.top = `${y + offsetY}px`;

        document.body.appendChild(particle);

        setTimeout(() => {
          particle.remove();
        }, 450);
      }
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '1';
        outlineX = mouseX;
        outlineY = mouseY;
        targetX = mouseX;
        targetY = mouseY;
      }

      if (isMagnetic && magneticTarget) {
        const rect = magneticTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        targetX = centerX + (mouseX - centerX) * 0.35;
        targetY = centerY + (mouseY - centerY) * 0.35;

        const shiftX = (mouseX - centerX) * 0.22;
        const shiftY = (mouseY - centerY) * 0.22;
        magneticTarget.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
      } else {
        targetX = mouseX;
        targetY = mouseY;
      }

      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      spawnTrailParticle(mouseX, mouseY);
    };

    const render = () => {
      const easing = isMagnetic ? 0.22 : 0.18;
      velX = targetX - outlineX;
      velY = targetY - outlineY;

      outlineX += velX * easing;
      outlineY += velY * easing;

      const speed = Math.hypot(velX, velY);

      if (speed > 1.2 && !isMagnetic) {
        currentAngle = Math.atan2(velY, velX) * (180 / Math.PI);
        const stretch = Math.min(speed * 0.0022, 0.4);
        currentScaleX = 1 + stretch;
        currentScaleY = 1 - stretch * 0.7;
      } else {
        currentScaleX += (1 - currentScaleX) * 0.15;
        currentScaleY += (1 - currentScaleY) * 0.15;
      }

      cursorOutline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%) rotate(${currentAngle}deg) scale(${currentScaleX}, ${currentScaleY})`;

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    const createShockwave = (x, y) => {
      const wave = document.createElement('div');
      wave.className = 'cursor-shockwave';
      wave.style.left = `${x}px`;
      wave.style.top = `${y}px`;
      document.body.appendChild(wave);

      const flash = document.createElement('div');
      flash.className = 'cursor-flash';
      flash.style.left = `${x}px`;
      flash.style.top = `${y}px`;
      document.body.appendChild(flash);

      setTimeout(() => {
        wave.remove();
        flash.remove();
      }, 550);
    };

    const handleMouseDown = (e) => {
      cursorOutline.classList.add('cursor-active');
      createShockwave(e.clientX, e.clientY);
    };

    const handleMouseUp = () => {
      cursorOutline.classList.remove('cursor-active');
    };

    const handleMouseLeave = () => {
      cursorDot.style.opacity = '0';
      cursorOutline.style.opacity = '0';
      isVisible = false;
    };

    const handleMouseEnter = () => {
      cursorDot.style.opacity = '1';
      cursorOutline.style.opacity = '1';
      isVisible = true;
    };

    // Attach dynamic listeners with event delegation for React SPA routing
    const handleMouseOver = (e) => {
      const magneticEl = e.target.closest('.nav-links a, .btn, .section-badge, button');
      if (magneticEl) {
        isMagnetic = true;
        magneticTarget = magneticEl;
        cursorOutline.classList.add('cursor-magnetic');
        cursorDot.classList.add('cursor-magnetic-dot');
        return;
      }

      const frameEl = e.target.closest('.featured-image-frame');
      if (frameEl) {
        cursorOutline.classList.add('cursor-badge-mode');
        if (cursorText) cursorText.textContent = 'EXPLORE';
        return;
      }

      const interactiveEl = e.target.closest('a, input, select, textarea, .feature-box, .modern-table tbody tr');
      if (interactiveEl) {
        cursorOutline.classList.add('cursor-hover');
        cursorDot.classList.add('cursor-hover-dot');
      }
    };

    const handleMouseOut = (e) => {
      const magneticEl = e.target.closest('.nav-links a, .btn, .section-badge, button');
      if (magneticEl && (!e.relatedTarget || !magneticEl.contains(e.relatedTarget))) {
        isMagnetic = false;
        magneticEl.style.transform = 'translate(0px, 0px)';
        magneticEl.style.transition = 'transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        setTimeout(() => {
          magneticEl.style.transition = '';
        }, 350);
        magneticTarget = null;
        cursorOutline.classList.remove('cursor-magnetic');
        cursorDot.classList.remove('cursor-magnetic-dot');
      }

      const frameEl = e.target.closest('.featured-image-frame');
      if (frameEl && (!e.relatedTarget || !frameEl.contains(e.relatedTarget))) {
        cursorOutline.classList.remove('cursor-badge-mode');
        if (cursorText) cursorText.textContent = '';
      }

      const interactiveEl = e.target.closest('a, input, select, textarea, .feature-box, .modern-table tbody tr');
      if (interactiveEl && (!e.relatedTarget || !interactiveEl.contains(e.relatedTarget))) {
        cursorOutline.classList.remove('cursor-hover');
        cursorDot.classList.remove('cursor-hover-dot');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);
}
