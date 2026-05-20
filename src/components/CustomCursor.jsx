import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor({ mode }) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const outerX = useSpring(cursorX, { damping: 20, stiffness: 250 });
  const outerY = useSpring(cursorY, { damping: 20, stiffness: 250 });

  const isHovered = mode === 'hover';

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          top: -4,
          left: -4,
          width: 8,
          height: 8,
          backgroundColor: '#fff',
          borderRadius: '50%',
          zIndex: 10000,
          pointerEvents: 'none',
          x: cursorX,
          y: cursorY,
          mixBlendMode: 'difference'
        }}
        animate={{
          scale: isHovered ? 0 : 1
        }}
      />
      
      <motion.div
        style={{
          position: 'fixed',
          top: -20,
          left: -20,
          width: 40,
          height: 40,
          border: '1.5px solid rgba(255,255,255,0.8)',
          borderRadius: '50%',
          zIndex: 9999,
          pointerEvents: 'none',
          x: outerX,
          y: outerY,
        }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          backgroundColor: isHovered ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)',
          borderColor: isHovered ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,0.8)',
          mixBlendMode: isHovered ? 'difference' : 'normal'
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      />

      <style>{`
        body, a, button, .project-card {
          cursor: none !important;
        }
        @media (max-width: 1024px) {
          body, a, button, .project-card { cursor: auto !important; }
          div[style*="position: fixed"][style*="zIndex: 10000"],
          div[style*="position: fixed"][style*="zIndex: 9999"] {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
