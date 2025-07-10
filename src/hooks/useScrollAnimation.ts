import { useEffect, useRef, useState } from 'react';

type AnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationDelay?: number;
};

type AnimationVariant = 
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'rotate-in'
  | 'bounce';

/**
 * A hook to animate elements when they come into view while scrolling.
 * @param variant Animation variant to use
 * @param options Configuration options
 * @returns Object containing ref to attach to element and whether it's in view
 */
export const useScrollAnimation = (
  variant: AnimationVariant = 'fade-up',
  options: AnimationOptions = {}
) => {
  const { 
    threshold = 0.1, 
    rootMargin = '0px', 
    triggerOnce = true,
    animationDelay = 0 
  } = options;
  
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;
          
          if (isVisible && (!triggerOnce || !hasAnimated)) {
            // Delay the animation if specified
            if (animationDelay > 0) {
              setTimeout(() => {
                setInView(true);
                setHasAnimated(true);
              }, animationDelay);
            } else {
              setInView(true);
              setHasAnimated(true);
            }
          } else if (!isVisible && !triggerOnce) {
            setInView(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasAnimated, animationDelay]);

  return { 
    ref, 
    inView,
    className: inView ? `animate-${variant}` : 'opacity-0'
  };
};

export default useScrollAnimation;