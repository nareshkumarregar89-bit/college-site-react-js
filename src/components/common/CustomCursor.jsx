import React from 'react';
import { usePhysicsCursor } from '../../hooks/usePhysicsCursor';

export function CustomCursor() {
  usePhysicsCursor();

  return (
    <>
      <div id="cursor-dot" aria-hidden="true" />
      <div id="cursor-outline" aria-hidden="true">
        <span id="cursor-text" />
      </div>
    </>
  );
}
