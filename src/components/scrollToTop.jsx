// components/ScrollToTopButton.js

import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setIsVisible(scrollTop > 500); // Show the button when scrolled down 100 pixels
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-all duration-500 text-lg fixed bottom-8 right-8 bg-primary text-white w-11 h-16  rounded-full cursor-pointer z-50 hover:bg-royal `}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
