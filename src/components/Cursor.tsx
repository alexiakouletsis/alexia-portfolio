import { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor-wrapper"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '25px',
        height: 'auto',
        pointerEvents: 'none',
        zIndex: 99999,
        willChange: 'transform',
      }}
    >
      <img 
        src="/assets/cursor/pen-cursor.svg" 
        alt="pen cursor"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          transform: 'translate(0px, 0px)' 
        }}
      />
    </div>
  );
};

export default Cursor;