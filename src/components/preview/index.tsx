import Image from 'next/image';
import Wave from 'react-wavify';
import useTrans from '~/hooks/use-trans';

const Preview = () => {
  const trans = useTrans();
  return (
    <div className="relative w-full h-[2000px] flex items-center flex-col bg-[#2D0A48] overflow-hidden">
      <div className="absolute top-[40px] left-[60px] z-20 hidden w1640:flex">
        <Image src="/assets/images/earth.png" alt="earth" width={152} height={184} />
      </div>

      <div className="absolute top-[40px] left-[30px] z-20 hidden md:flex w1640:hidden">
        <Image src="/assets/images/earth.png" alt="earth" width={100} height={120} />
      </div>

      <div className="absolute top-[40px] left-[30px] z-20 flex md:hidden">
        <Image src="/assets/images/earth.png" alt="earth" width={70} height={80} />
      </div>

      <div className="absolute bottom-0 left-0 z-10 flex">
        <Image src="/assets/images/tower.png" alt="tower" width={267} height={372} />
      </div>

      <div className="absolute bottom-0 right-0 z-10 flex">
        <Image src="/assets/images/mountain.png" alt="mountain" width={414} height={133} />
      </div>

      <div className="absolute px-8 items-center w1640:left-[120px] top-[120px] flex flex-col gap-y-8 w1640:flex-row w1640:items-center">
        <div className="relative hidden w1640:flex">
          <Image
            src="/assets/images/person-1.png"
            alt="person-1"
            width={807.74}
            height={696.28}
            className="top-0 z-10 left-[119px]"
          />
        </div>

        <div className="relative flex items-center w1640:hidden">
          <Image src="/assets/images/person-1.png" alt="person-1" width={603} height={500} className="top-0 z-10" />

          <div className="z-20">
            <Image src="/assets/images/window.png" alt="window" width={200} height={150} />
          </div>
        </div>

        <div className="z-10 flex flex-col ">
          <div className="text-xl text-center w1640:text-left md:text-2xl lg:text-3xl w1460:text-[40px] font-bold text-white uppercase w1640:max-w-[542px] w1460:leading-[50px]">
            {trans.home.previewTitle1}
          </div>

          <div className="text-white w1640:max-w-[670px] mt-4 text-center w1640:text-left">
            {trans.home.previewContent1}
          </div>
        </div>
      </div>

      <div className="absolute w1640:left-[50px] bottom-[-8px] flex items-center">
        <div>
          <Image
            src="/assets/images/person-2.png"
            alt="person-2"
            width={695.47}
            height={429.77}
            className="top-0 z-10 left-[119px]"
          />
        </div>
      </div>

      <div className="absolute hidden w1640:right-[50px] bottom-[140px] w1640:flex items-center">
        <div>
          <Image
            src="/assets/images/group.png"
            alt="group"
            width={800}
            height={450}
            className="top-0 z-10 left-[119px]"
          />
        </div>
      </div>

      <div className="absolute top-[20px] right-[20px] z-20 hidden w1640:flex">
        <Image src="/assets/images/window.png" alt="window" width={200} height={150} />
      </div>

      <div className="absolute px-8 justify-center w1640:left-[370px] bottom-[400px] sm:bottom-[450px] w1640:bottom-[650px] z-10 flex flex-col max-w-[695px]">
        <div className="flex items-center mb-10 w1640:hidden">
          <div>
            <Image
              src="/assets/images/group.png"
              alt="group"
              width={600}
              height={350}
              className="top-0 z-10 left-[119px]"
            />
          </div>
        </div>

        <div className="w1640:text-[40px] font-bold text-white uppercase w1640:leading-[50px] text-xl md:text-2xl lg:text-3xl text-center w1640:text-left">
          {trans.home.previewTitle2}
        </div>

        <div className="mt-4 text-center text-white w1640:text-left">{trans.home.previewContent2}</div>
      </div>

      <div
        className="h-[1200px] w-full absolute top-0"
        style={{
          background: 'linear-gradient(0.01deg, #2D0A48 -20.81%, #4211C6 111.67%)',
          backgroundImage: 'url("/assets/images/preview.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />

      <Wave
        fill="url(#gradient)"
        options={{
          height: 20,
          amplitude: 65,
          speed: 0.15,
          points: 3,
        }}
        className="absolute bottom-0"
        style={{
          height: '1000px',
        }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(0)">
            <stop offset="10%" stopColor="#0A8BEB" />
            <stop offset="90%" stopColor="#F093FF" />
          </linearGradient>
        </defs>
      </Wave>
    </div>
  );
};

export default Preview;
