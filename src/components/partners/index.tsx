import Image from 'next/image';
import Link from 'next/link';

import partners from 'data/partners.json';

const Partners = () => (
  <div className="flex flex-col items-center px-4 py-8 bg-black sm:py-14 gap-y-8 md:gap-y-16">
    <div className="container flex flex-col items-center bg-black gap-y-8 md:gap-y-16">
      <div className="text-2xl font-bold text-center text-white sm:text-news">Đối tác chiến lược</div>

      <div className="flex flex-wrap items-center justify-center w-full cursor-pointer gap-x-4">
        {partners.map(item => (
          <Link key={item.name} href={item.href}>
            <a>
              <Image src={item.src} alt="partner" height={90} width={200} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Partners;
