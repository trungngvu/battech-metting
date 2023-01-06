import Image from 'next/image';
import Link from 'next/link';

import newspaper from 'data/newspaper.json';

const Newspaper = () => (
  <div className="flex flex-col items-center px-4 py-8 bg-white sm:py-14 gap-y-8 md:gap-y-16">
    <div className="container flex flex-col items-center bg-white gap-y-8 md:gap-y-16">
      <div className="text-2xl font-bold text-center text-black sm:text-news">Báo chí nói gì về chúng tôi</div>

      <div className="flex flex-wrap items-center justify-center w-full gap-x-11 gap-y-5">
        {newspaper.map(item => (
          <div
            key={item.name}
            className="flex flex-col items-center px-2 py-6 border-4 border-blue-100 h-52 sm:h-56 sm:py-8 sm:px-5 w-36 sm:w-48 rounded-18"
          >
            <div className="relative w-full mb-10 h-28">
              <Image src={item.src} alt="partner" layout="fill" objectFit="contain" />
            </div>

            <Link href={item.href}>
              <button className="px-4 py-2 mt-auto text-xs uppercase bg-white border border-blue-300 sm:px-6 sm:text-sm text-primary rounded-18 hover:bg-primary hover:text-white">
                Xem thêm
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Newspaper;
