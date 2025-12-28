'use client';

import { useRef, useState, useEffect } from 'react';
import Matter from 'matter-js';

interface FallingTextProps {
  text?: string;
  highlightWords?: string[];
  highlightClass?: string;
  trigger?: 'auto' | 'scroll' | 'click' | 'hover';
  backgroundColor?: string;
  wireframes?: boolean;
  gravity?: number;
  mouseConstraintStiffness?: number;
  fontSize?: string | { xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
  skillColors?: { [key: string]: string };
}

export default function FallingText({
  text = '',
  highlightWords = [],
  highlightClass = 'highlighted',
  trigger = 'auto',
  backgroundColor = 'transparent',
  wireframes = false,
  gravity = 1,
  mouseConstraintStiffness = 0.2,
  fontSize = '1rem',
  skillColors = {}
}: FallingTextProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);

  const [effectStarted, setEffectStarted] = useState(false);
  const [currentFontSize, setCurrentFontSize] = useState<string>('1rem');

  // 반응형 fontSize 계산
  useEffect(() => {
    const calculateFontSize = () => {
      if (typeof fontSize === 'string') {
        setCurrentFontSize(fontSize);
        return;
      }

      const width = window.innerWidth;
      if (width < 600 && fontSize.xs) {
        setCurrentFontSize(fontSize.xs);
      } else if (width >= 600 && width < 900 && fontSize.sm) {
        setCurrentFontSize(fontSize.sm);
      } else if (width >= 900 && fontSize.md) {
        setCurrentFontSize(fontSize.md);
      } else if (fontSize.md) {
        setCurrentFontSize(fontSize.md);
      } else if (fontSize.sm) {
        setCurrentFontSize(fontSize.sm);
      } else if (fontSize.xs) {
        setCurrentFontSize(fontSize.xs);
      }
    };

    calculateFontSize();
    window.addEventListener('resize', calculateFontSize);
    return () => window.removeEventListener('resize', calculateFontSize);
  }, [fontSize]);

  useEffect(() => {
    if (!textRef.current) return;
    const words = text.split(' ');
    const newHTML = words
      .map(word => {
        const isHighlighted = highlightWords.some(hw => word.startsWith(hw));
        const skillColor = skillColors[word] || '#ffffff';
        return `<span class="word ${isHighlighted ? highlightClass : ''}" style="display: inline-block; margin: 0 0.5rem; color: ${skillColor}; font-weight: 800;">${word}</span>`;
      })
      .join(' ');
    textRef.current.innerHTML = newHTML;
  }, [text, highlightWords, highlightClass, skillColors]);

  useEffect(() => {
    if (trigger === 'auto') {
      setEffectStarted(true);
      return;
    }
    if (trigger === 'scroll' && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEffectStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  useEffect(() => {
    if (!effectStarted) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;

    if (!containerRef.current || !canvasContainerRef.current || !textRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;

    if (width <= 0 || height <= 0) {
      return;
    }

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: canvasContainerRef.current,
      engine,
      options: {
        width,
        height,
        background: backgroundColor,
        wireframes
      }
    });

    const boundaryOptions = {
      isStatic: true,
      render: { fillStyle: 'transparent' }
    };
    const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
    const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);

    const wordSpans = textRef.current.querySelectorAll<HTMLSpanElement>('.word');
    const wordBodies = Array.from(wordSpans).map(elem => {
      const rect = elem.getBoundingClientRect();

      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;

      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        render: { fillStyle: 'transparent' },
        restitution: 0.8,
        frictionAir: 0.01,
        friction: 0.2
      });

      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 5,
        y: 0
      });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);
      return { elem, body };
    });

    wordBodies.forEach(({ elem, body }) => {
      elem.style.position = 'absolute';
      elem.style.left = `${body.position.x - (body.bounds.max.x - body.bounds.min.x) / 2}px`;
      elem.style.top = `${body.position.y - (body.bounds.max.y - body.bounds.min.y) / 2}px`;
      elem.style.transform = 'none';
    });

    const mouse = Mouse.create(containerRef.current);
    mouse.element.removeEventListener("wheel", (mouse as any).mousewheel);
mouse.element.removeEventListener("DOMMouseScroll", (mouse as any).mousewheel);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false }
      }
    });
    render.mouse = mouse;

    World.add(engine.world, [floor, leftWall, rightWall, ceiling, mouseConstraint, ...wordBodies.map(wb => wb.body)]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    const updateLoop = () => {
      wordBodies.forEach(({ body, elem }) => {
        const { x, y } = body.position;
        elem.style.left = `${x}px`;
        elem.style.top = `${y}px`;
        elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      });
      Matter.Engine.update(engine);
      requestAnimationFrame(updateLoop);
    };
    updateLoop();

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && canvasContainerRef.current) {
        canvasContainerRef.current.removeChild(render.canvas);
      }
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [effectStarted, gravity, wireframes, backgroundColor, mouseConstraintStiffness]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === 'click' || trigger === 'hover')) {
      setEffectStarted(true);
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'visible'
      }}
    >
      <div
        ref={containerRef}
        onClick={trigger === 'click' ? handleTrigger : undefined}
        onMouseEnter={trigger === 'hover' ? handleTrigger : undefined}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          pointerEvents: 'auto'
        }}
      >
        <div
          ref={textRef}
          style={{
            fontSize: currentFontSize,
            lineHeight: 1.8,
            textAlign: 'center',
            padding: '2rem'
          }}
        />
        <div ref={canvasContainerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />
      </div>
    </div>
  );
}
