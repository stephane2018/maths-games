import { useRef, useEffect, useCallback } from 'react';

export function useAnimationFrame(callback) {
  const rafRef = useRef(null);
  const lastTimeRef = useRef(0);
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  const loop = useCallback(() => {
    const now = performance.now();
    const dt = Math.min((now - lastTimeRef.current) / 1000, 0.1);
    lastTimeRef.current = now;
    callbackRef.current(dt);
    rafRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    lastTimeRef.current = performance.now();
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [loop]);
}
