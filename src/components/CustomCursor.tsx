'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // 초기 상태 설정
    gsap.set(cursor, { opacity: 0, scale: 1 });

    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");

    let isVisible = false;

    // 마우스 이동 처리
    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        gsap.to(cursor, { opacity: 1, duration: 0.3 });
        isVisible = true;
      }
      xSet(e.clientX - 6); 
      ySet(e.clientY - 6);
    };

    // 호버 상태를 감지하는 동적 방식 (모든 요소 대응)
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // 요소를 직접 검사하거나 부모 중 인터랙티브한 요소가 있는지 확인
      const isPointer = !!target.closest('a, button, [role="button"], .clickable, .MuiButtonBase-root, input, select, [tabindex]:not([tabindex="-1"])');

      if (isPointer) {
        gsap.to(cursor, { scale: 3.5, duration: 0.3, ease: "power2.out" }); // 호버 시 크기를 3.5배로 명확하게 키움
      } else {
        gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        width: '12px',
        height: '12px',
        backgroundColor: 'white',
        borderRadius: '50%',
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        mixBlendMode: 'difference',
        willChange: 'transform',
        opacity: 0,
      }}
    />
  );
}
