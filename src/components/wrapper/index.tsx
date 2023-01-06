import { ArrowSmUpIcon } from '@heroicons/react/outline';
import { AnimatePresence } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';

import Header from '../header';

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const refScrollUp = useRef<HTMLDivElement>(null);

  const handleVisibleButton = () => {
    const position = window.pageYOffset;

    setScrollPosition(position);
  };

  const scrollToTop = () => {
    if (!refScrollUp.current) {
      throw Error('refScrollUp is not assigned');
    }

    refScrollUp.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
  }, []);

  return (
    <div className="flex flex-col min-h-screen" ref={refScrollUp}>
      <Header />

      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => {
          window.scrollTo(0, 0);
        }}
      >
        <div className="flex justify-center flex-1 w-full">{children}</div>
      </AnimatePresence>

      {scrollPosition > 50 && (
        <div
          className="fixed grid w-10 z-[98] h-10 text-gray-800 bg-gray-400 rounded-full shadow-lg cursor-pointer hover:scale-110 hover:bg-gray-300 place-items-center right-8 bottom-10"
          onClick={scrollToTop}
        >
          <ArrowSmUpIcon width={30} />
        </div>
      )}
    </div>
  );
};

export default Wrapper;
