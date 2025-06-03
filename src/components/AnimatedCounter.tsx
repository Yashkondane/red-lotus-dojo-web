
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  className = ''
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const { elementRef, isVisible } = useScrollAnimation(0.3);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
