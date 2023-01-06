import Image from 'next/image';
import Link from 'next/link';

import services from 'data/services.json';

const Services = () => (
  <div className="flex justify-center px-4 py-10 sm:py-18 bg-neutral-100">
    <div className="container flex flex-col items-center">
      <div className="font-bold text-news">Dịch vụ của chúng tôi</div>

      <div className="grid grid-cols-1 mt-12 gap-y-20 sm:grid-cols-2 gap-x-18">
        {services.map(service => (
          <div key={service.name} className="flex flex-col items-center max-w-2xl">
            <div className="relative w-full overflow-hidden rounded-xl">
              <Image src={service.image} alt="partner" layout="responsive" width={500} height={288} />
            </div>

            <div className="mt-6 text-xl font-bold text-center text-md md:text-2xl line-clamp-1">{service.name}</div>

            <div className="h-32 mt-4 overflow-hidden text-base text-center">
              <div className="line-clamp-5">{service.description}</div>
            </div>

            <Link href={service.href}>
              <button className="py-2 mt-6 text-xs uppercase bg-white border border-blue-300 px-7 sm:text-sm text-primary rounded-18 hover:bg-primary hover:text-white">
                Xem thêm
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;
