import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Wave from 'react-wavify';
import CarouselItem from '~/components/about-us-carousel-item';
import useTrans from '~/hooks/use-trans';

import Card from 'components/core-value-card';
import Layout from 'components/layout';

const AboutUs: NextPage = () => {
  const trans = useTrans();
  return (
    <Layout title={trans.about.title}>
      <div className="w-full">
        <div className="flex justify-center items-center xl:block bg-info h-screen max-h-[989px] bg-no-repeat bg-cover text-white relative">
          <div className="w-[30%] absolute top-[5%] right-[3%] md:top-0 md:right-0 xl:left-[18%] xl:top-[18%] xl:block">
            <Image src={'/assets/images/about-us/team.svg'} width="581px" height="566px" alt="" />
          </div>
          <div className="absolute px-4 xl:p-0 -translate-y-20 text-sm lg:text-base xl:left-[51.77%] xl:top-[35%]">
            <div className="text-[24px] font-bold">{trans.about.heading}</div>
            <hr className="w-[248px] border-2 border-white rounded my-2"></hr>
            <div className="max-w-[553px] text-justify">{trans.about.intro}</div>
          </div>
        </div>
        <div className="relative -my-48">
          <Wave
            fill="#E231FF"
            className="h-[294px] absolute top-0"
            options={{
              height: 20,
              amplitude: 50,
              speed: 0.15,
              points: 4,
            }}
          ></Wave>
          <Wave
            fill="url(#gradient)"
            className="h-[294px] absolute top-4"
            options={{
              height: 20,
              amplitude: 50,
              speed: 0.15,
              points: 4,
            }}
          >
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#147FE2" />
                <stop offset="85.87%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
          </Wave>
        </div>
        <div className="px-5 text-sm md:text-base flex flex-col-reverse md:flex-row justify-center items-center gap-10 lg:gap-20 mt-[110px]">
          <div className="w-full md:w-[480px] z-10">
            <div className="text-[24px] font-bold uppercase mb-2">{trans.about.visionTitle}</div>
            <div className="text-justify">
              {trans.about.visionContent1} <br /> {trans.about.visionContent2}
            </div>
          </div>
          <div>
            <Image src={'/assets/images/about-us/rocket.png'} width="581px" height="699px" alt="" className="z-10" />
          </div>
        </div>
        <div
          className="flex justify-center items-center flex-col"
          style={{
            background: 'linear-gradient(180deg, rgba(242, 242, 242, 0) 0%, #EDEDED 28.13%)',
          }}
        >
          <div className="uppercase font-bold text-[20px] lg:text-[24px] pt-20 lg:pt-40 pb-16">
            {trans.about.coreValue}
          </div>
          <div className="pb-20 flex justify-center flex-wrap">
            <Card color="#4C94FF" title={trans.about.card[1].title} content={trans.about.card[1].content} />
            <Card color="#02B7FF" title={trans.about.card[2].title} content={trans.about.card[2].content} />
            <Card color="#0252CB" title={trans.about.card[3].title} content={trans.about.card[3].content} />
            <Card color="#26497F" title={trans.about.card[4].title} content={trans.about.card[4].content} />
          </div>
          <div className="flex justify-center items-center gap-7 lg:gap-20 min-h-[595px] bg-[#FFE5A8] w-full flex-col lg:flex-row">
            <div className="my-5">
              <Image src={'/assets/images/about-us/colab.png'} width="480px" height="435px" alt="" />
            </div>
            <div className="px-5 lg:px-0">
              <div className="font-bold uppercase text-[20px] lg:text-[24px] my-5">{trans.about.hrTitle}</div>
              <div className="max-w-[510px] text-justify text-sm lg:text-base mb-5 lg:mb-0">
                {trans.about.hrContent1} <br /> {trans.about.hrContent2}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="uppercase font-bold text-xl mt-16 mb-10">{trans.about.roadmap}</div>
            <div className="hidden lg:block m-10 mb-20">
              {useRouter().locale === 'en' ? (
                <Image src={'/assets/images/about-us/roadmapEng.png'} width="1200px" height="328px" alt="roadmap" />
              ) : (
                <Image src={'/assets/images/about-us/roadmap.png'} width="1200px" height="328px" alt="roadmap" />
              )}
            </div>
            <div className="lg:hidden pb-7">
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay={true}
                autoPlaySpeed={6000}
                centerMode={false}
                className="w-screen h-[500px] lg:hidden"
                draggable
                focusOnSelect={false}
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  mobile: {
                    breakpoint: {
                      max: 600,
                      min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 600,
                    },
                    items: 2,
                    partialVisibilityGutter: 30,
                  },
                }}
                rewind={true}
                rewindWithAnimation={true}
                shouldResetAutoplay
                showDots={true}
                slidesToSlide={1}
                swipeable
              >
                <CarouselItem year="2018" content={trans.about.carousel[1]} odd />
                <CarouselItem year="2019" content={trans.about.carousel[2]} />
                <CarouselItem year="2020" content={trans.about.carousel[3]} odd />
                <CarouselItem year="2021" content={trans.about.carousel[4]} />
                <CarouselItem year="2022" content={trans.about.carousel[5]} odd />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
