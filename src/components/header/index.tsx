import { Disclosure } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import NavItem from 'components/nav-item';
import navigation from 'data/navigation.json';
import useTrans from 'hooks/use-trans';

import SelectLanguages from '../select-languages';

const Header = () => {
  const trans = useTrans();

  return (
    <Disclosure as="nav" className="sticky top-0 z-[99] bg-black shadow-lg">
      {() => (
        <>
          <motion.div
            className={clsx('px-2 xl:px-5 py-4')}
            style={{
              transitionDelay: '0.5s all ease',
            }}
          >
            <div className="relative flex items-center">
              <div className="flex items-center flex-1">
                <Link href={'/'}>
                  <a className="flex items-center">
                    <Image src="/assets/icons/logo.svg" alt="logo" height={50} width={120} />
                  </a>
                </Link>
              </div>

              <div className="items-center hidden xl:flex xl:gap-x-5">
                {navigation.map(item => (
                  <NavItem key={item.name} data={item} />
                ))}

                <div className="h-8 border-l border-gray-400 border-solid" />

                <div className="flex items-center justify-center gap-x-2">
                  <SelectLanguages />

                  <div className="flex gap-x-[20px]">
                    <Link href="/sign-in">
                      <button className="text-black bg-white w-[105px] h-[36px] grid place-items-center cursor-pointer rounded-[4px] font-bold">
                        {trans.navigation['sign-in']}
                      </button>
                    </Link>

                    <Link href="/sign-up">
                      <button className="text-white bg-primary w-[105px] h-[36px] grid place-items-center cursor-pointer rounded-[4px] font-bold">
                        {trans.navigation['sign-up']}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center xl:hidden">
                <SelectLanguages />

                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-black hover:bg-gray-700 focus:outline-none">
                  <MenuIcon className="block p-1 border border-solid rounded-sm w-9 h-9 text-primary border-primary" />
                </Disclosure.Button>
              </div>
            </div>
          </motion.div>

          <Disclosure.Panel className="xl:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
                <NavItem key={item.name} data={item} isMobile />
              ))}
              <NavItem key={'sign-in'} data={{ name: 'sign-in', path: '/sign-in' }} isMobile />
              <NavItem key={'sign-up'} data={{ name: 'sign-up', path: '/sign-up' }} isMobile />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
