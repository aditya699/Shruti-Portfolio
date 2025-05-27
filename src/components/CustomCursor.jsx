import { useEffect, useState } from 'react';
import styles from '../styles/CustomCursor.module.css';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    const interactiveEls = document.querySelectorAll('a, button, .cta');
    const addHover = () => setIsHovered(true);
    const removeHover = () => setIsHovered(false);

    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <div
      className={`${styles.cursor} ${isHovered ? styles.hovered : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}

export default CustomCursor;
