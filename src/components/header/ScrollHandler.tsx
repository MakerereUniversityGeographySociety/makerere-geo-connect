
import { useState, useEffect } from 'react';

interface ScrollHandlerProps {
  threshold?: number;
}

const useScrollHandler = ({ threshold = 50 }: ScrollHandlerProps = {}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};

export default useScrollHandler;
