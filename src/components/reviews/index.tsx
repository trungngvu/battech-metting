import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { clsx } from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import reviews from 'data/reviews.json';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handlePreviousReview = () => {
    if (currentReview === 0) {
      return;
    }

    setCurrentReview(value => value - 1);
  };

  const handleNextReview = () => {
    if (currentReview === reviews.length - 1) {
      return;
    }

    setCurrentReview(value => value + 1);
  };

  return (
    <div className="flex justify-center px-4 pt-8 bg-review sm:pt-14 -z-10">
      <div className="container flex flex-col items-center justify-between">
        <div className="text-2xl font-bold text-center text-white sm:text-news">Nhận xét của khách hàng</div>

        <div className="flex flex-col items-center justify-center mt-11 gap-x-20 gap-y-8 xl:flex-row">
          <div className="flex flex-col items-center justify-end w-full">
            <Image src="/assets/icons/review.svg" alt="review" width={460} height={390} layout="intrinsic" />
          </div>

          <div className="flex items-center w-full px-4 mb-10 xl:mb-0">
            <div className="relative flex flex-col w-full bg-white sm:w-review rounded-28 h-96 sm:h-80">
              <div
                className={clsx(
                  'absolute left-[-18px] top-0 bottom-0 my-auto grid bg-gray-300 rounded-full cursor-pointer opacity-70 w-9 h-9 place-items-center',
                  {
                    'opacity-20 cursor-none pointer-events-none select-none': currentReview === 0,
                    'hover:bg-gray-500': currentReview > 0,
                  }
                )}
                onClick={handlePreviousReview}
              >
                <ChevronLeftIcon width={20} />
              </div>

              <div className="flex flex-col items-center h-full py-4 px-14">
                <div className="h-24 overflow-hidden rounded-full">
                  <Image src={reviews[currentReview].image} width={96} height={96} alt="avatar" />
                </div>

                <div className="mt-2 text-xl font-bold text-black">{reviews[currentReview].name}</div>

                <div className="font-bold text-center">{reviews[currentReview].job}</div>

                <div className="mt-4 text-center line-clamp-5 sm:line-clamp-4">{reviews[currentReview].review}</div>
              </div>

              <div
                className={clsx(
                  'absolute grid bg-gray-300 rounded-full cursor-pointer opacity-70 w-9 h-9 right-[-18px] top-0 bottom-0 my-auto place-items-center',
                  {
                    'opacity-20 cursor-none pointer-events-none select-none': currentReview === reviews.length - 1,
                    'hover:bg-gray-500': currentReview !== reviews.length - 1,
                  }
                )}
                onClick={handleNextReview}
              >
                <ChevronRightIcon width={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
