import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import useTrans from 'hooks/use-trans';

type NavItemProps = {
  data: {
    name: string;
    path: string;
    sub?: { name: string; path: string }[];
  };
  isMobile?: boolean;
};

const linkVariants = {
  initial: {
    opacity: 0.25,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
  hover: {},
};

const NavItem = ({ data, isMobile = false }: NavItemProps): JSX.Element => {
  const [isOpenSub, setIsOpenSub] = useState(false);

  const { pathname, push } = useRouter();
  const trans = useTrans();

  const transNavigation = trans.navigation;
  const sub = data?.sub ?? [];
  const isIncludedSub = sub.length > 0;

  const handleRoute = () => push(data.path);

  const checkPath = (path: string) => {
    if (path === '/') {
      return path === pathname;
    }

    return pathname.includes(path);
  };

  const toggleSub = (event: React.MouseEvent<SVGElement>) => {
    event.stopPropagation();

    setIsOpenSub(value => !value);
  };

  const openSub = () => setIsOpenSub(true);

  const closeSub = () => setIsOpenSub(false);

  const onClickSub = async (event: React.MouseEvent<HTMLDivElement>, path: string) => {
    event.stopPropagation();

    await push(path);

    closeSub();
  };

  if (isMobile) {
    return (
      <Disclosure.Button
        className={clsx(
          {
            'text-primary': checkPath(data.path),
            'text-white hover:text-primary': !checkPath(data.path),
          },
          'block text-sm font-semibold w-full xl:text-lg px-3 py-2 rounded-md uppercase'
        )}
      >
        <div className="flex items-center justify-start">
          <div onClick={handleRoute} className="relative">
            {trans.navigation[data.name as keyof typeof transNavigation] || data.name}
          </div>

          {isIncludedSub && !isOpenSub && (
            <ChevronRightIcon width={14} height={14} className="ml-auto" onClick={toggleSub} />
          )}

          {isIncludedSub && isOpenSub && (
            <ChevronDownIcon width={14} height={14} className="ml-auto" onClick={toggleSub} />
          )}
        </div>

        {isIncludedSub && isOpenSub && (
          <div className="mt-2">
            <div className="flex flex-col items-start justify-start w-full bg-white">
              {(data?.sub || []).map((item, index) => (
                <div
                  key={item.name}
                  onClick={() => push(item.path)}
                  className={clsx(
                    {
                      'border-t border-gray-200': index === 0,
                    },
                    'w-full px-8 py-2 text-white hover:bg-primary hover:text-white select-none whitespace-nowrap text-sm border-b border-gray-200'
                  )}
                >
                  {trans.navigation[item.name as keyof typeof transNavigation] || item.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </Disclosure.Button>
    );
  }

  return (
    <div onClick={handleRoute} onMouseEnter={openSub} onMouseLeave={closeSub}>
      <motion.div
        variants={linkVariants}
        initial="initial"
        animate="visible"
        whileHover="hover"
        className={clsx(
          {
            'text-primary': checkPath(data.path),
            'text-white hover:text-primary': !checkPath(data.path),
          },
          'text-lg px-3 py-2 rounded-md uppercase font-medium cursor-pointer tracking-wide flex items-center select-none relative'
        )}
      >
        {trans.navigation[data.name as keyof typeof transNavigation] || data.name}

        {isIncludedSub && !isOpenSub && <ChevronRightIcon width={14} height={14} className="ml-2" />}

        {isIncludedSub && isOpenSub && <ChevronDownIcon width={14} height={14} className="ml-2" />}

        {isIncludedSub && isOpenSub && (
          <div className="absolute top-[30px] right-[12px] pt-5">
            <div className="flex flex-col items-start justify-center w-full bg-white border border-gray-200">
              {(data?.sub || []).map((item, index) => (
                <div
                  key={item.name}
                  onClick={event => onClickSub(event, item.path)}
                  className={clsx(
                    {
                      'border-b border-gray-200': index !== sub.length - 1,
                    },
                    'w-full px-8 py-2 text-black hover:bg-primary hover:text-white select-none whitespace-nowrap text-sm'
                  )}
                >
                  {trans.navigation[item.name as keyof typeof transNavigation] || item.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default NavItem;
