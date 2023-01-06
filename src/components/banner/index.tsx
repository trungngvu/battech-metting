type BannerProps = {
  title: string;
  description: string | undefined;
};

const Banner = ({ title, description }: BannerProps) => (
  <div className="flex flex-col items-center justify-center w-full p-4 bg-center bg-no-repeat bg-cover h-banner bg-banner">
    <div className="grid text-3xl font-bold text-center text-white uppercase sm:text-[36px] place-items-center max-w-[700px] leading-[50px]">
      {title}
    </div>

    {description && <div className="max-w-2xl mt-4 text-center text-white">{description}</div>}
  </div>
);

export default Banner;
