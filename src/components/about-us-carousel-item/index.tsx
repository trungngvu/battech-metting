import Image from 'next/image';

interface Props {
  year: string;
  content: string;
  odd?: boolean;
}

const CarouselItem = ({ year, content, odd }: Props) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="relative">
        <Image src="/assets/images/carousel-item/circle.svg" width="121px" height="121px" alt="" />
        <span className="z-10 font-bold text-xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          {year}
        </span>
      </div>
      {odd ? (
        <Image src="/assets/images/carousel-item/frameodd.svg" width="377px" height="64px" alt="" />
      ) : (
        <Image src="/assets/images/carousel-item/frameeven.svg" width="377px" height="64px" alt="" />
      )}
      <div className="text-justify max-w-[268px]">{content}</div>
    </div>
  );
};

export default CarouselItem;
