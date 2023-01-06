import { ArrowRightIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import useTrans from '~/hooks/use-trans';

const buttonVariants = {
  visible: {
    x: [0, -20, 20, -20, 20, 0],
    transition: { delay: 0.25, duration: 1 },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      yoyo: Infinity,
    },
  },
};

const Intro = () => {
  const trans = useTrans();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <div className="relative w-full flex w1460:h-[950px] bg-intro bg-cover bg-right-bottom">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        style={{
          position: 'absolute',
        }}
        options={{
          fullScreen: false,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
            },
            number: {
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
          },
          detectRetina: true,
        }}
      />

      <div className="hidden absolute top-[10%] left-[5%] right-[5%] w1550:left-[10%] w1640:left-[15%] w1730:left-[20%] text-white w1460:flex flex-col z-[11]">
        <video
          width="800px"
          height="500px"
          preload="auto"
          autoPlay
          loop
          muted
          controls
          className="border-[5px] border-[#0170EA] rounded-[22px] hidden w1460:block shadow-xl"
        >
          <source src="/assets/videos/battech.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <video
          width="100%"
          height="500px"
          preload="auto"
          autoPlay
          loop
          muted
          controls
          className="border-[5px] border-[#0170EA] rounded-[22px] w1460:hidden"
        >
          <source src="/assets/videos/battech.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div className="text-[30px] uppercase font-bold text-center w1460:text-left w-full mt-6">
          {trans.home.introTitle}
        </div>

        <div className="w1460:max-w-[650px] mt-4">{trans.home.introContent}</div>

        <Link href={'/contact'}>
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="visible"
            whileHover="hover"
            className="flex items-center justify-center px-5 py-3 mt-10 border border-white rounded-full cursor-pointer w-fit"
          >
            <ArrowRightIcon width={30} height={30} />

            <div className="ml-3">{trans.home.signUpNow}</div>
          </motion.button>
        </Link>
      </div>

      <div className="w1460:hidden justify-center items-center text-white flex flex-col z-[11] py-10 px-8">
        <video
          width="800px"
          height="500px"
          preload="auto"
          autoPlay
          muted
          controls
          className="border-[5px] border-[#0170EA] rounded-[22px] hidden w1460:block"
        >
          <source src="/assets/videos/battech.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <video
          width="100%"
          height="500px"
          preload="auto"
          autoPlay
          muted
          controls
          className="border-[5px] border-[#0170EA] rounded-[22px] w1460:hidden"
        >
          <source src="/assets/videos/battech.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div className="text-lg sm:text-xl md:text-2xl lg:text-[30px] uppercase font-bold text-center w1460:text-left w-full w1460:max-w-[550px] mt-12">
          {trans.home.introTitle}
        </div>

        <div className="w1460:max-w-[650px] mt-4 text-center 1460:text-left">{trans.home.introContent}</div>

        <Link href={'/contact'}>
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="visible"
            whileHover="hover"
            className="flex items-center justify-center px-5 py-2 mt-8 border border-white rounded-full cursor-pointer w-fit hover:bg-primary"
          >
            <ArrowRightIcon width={30} height={30} />

            <div className="ml-3">{trans.home.signUpNow}</div>
          </motion.button>
        </Link>
      </div>

      <div className="absolute top-[10%] h-[90%] hidden w1460:block left-[calc(5%+780px)] w1550:left-[calc(10%+780px)] w1640:left-[calc(15%+780px)] w1730:left-[calc(20%+780px)] bg-person bg-no-repeat bg-contain bg-left-bottom w-[calc(95%-800px)] w1550:w-[calc(90%-800px)] w1640:w-[calc(85%-800px)] w1730:w-[calc(80%-800px)] z-10 bottom-0"></div>
    </div>
  );
};

export default Intro;
