import { ChevronRightIcon } from '@heroicons/react/outline';
import { clsx } from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import navigation from 'data/navigation.json';
import useTrans from 'hooks/use-trans';

type NavLinksProps = {
  title?: string;
};

const NavLinks = ({ title }: NavLinksProps) => {
  const { pathname } = useRouter();
  const trans = useTrans();
  const transNavigation = trans.navigation;

  const paths = pathname
    .split('/')
    .splice(0, 2)
    .map(path => navigation.find(nav => nav.path.includes(path)));

  const data = title ? [...paths, { name: title, path: null }] : paths;

  return (
    <div className="container flex flex-wrap items-center py-3 text-sm font-medium md:text-base text-primary">
      {data.map((item, index) => (
        <div key={index} className={clsx('flex items-center', { 'text-slate-400': index === data.length - 1 })}>
          {index !== 0 && (
            <span className="px-1">
              <ChevronRightIcon width={14} height={14} />
            </span>
          )}

          <Link href={item?.path || '#'}>
            <span
              className={clsx('cursor-pointer line-clamp-1', {
                'hover:text-blue-500': index !== data.length - 1,
              })}
            >
              {trans.navigation[item?.name as keyof typeof transNavigation] || item?.name}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
