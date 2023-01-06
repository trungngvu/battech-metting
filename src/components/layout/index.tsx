import { motion } from 'framer-motion';
import Head from 'next/head';
import { ReactNode } from 'react';

import Banner from '../banner';
import Footer from '../footer';
import LatestNews from '../latest-news';

type LayoutProps = {
  children: ReactNode;
  title: string;
  description?: string;
  banner?: boolean;
  animate?: boolean;
  latestNews?: boolean;
  footer?: boolean;
};

const variants = {
  initial: { opacity: 0, x: -200, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({
  children,
  title,
  description,
  banner = false,
  animate = false,
  latestNews = true,
  footer = true,
}: LayoutProps) => (
  <div className="flex flex-col w-full">
    <Head>
      <title>{title}</title>
    </Head>

    {banner && <Banner title={title} description={description} />}

    <div className="flex flex-col flex-1 w-full bg-white">
      <motion.div
        variants={animate ? variants : {}}
        initial="initial"
        animate="visible"
        exit="exit"
        className="flex justify-center flex-1 w-full"
      >
        {children}
      </motion.div>
    </div>

    {latestNews && <LatestNews />}

    {footer && <Footer />}
  </div>
);

export default Layout;
