import { ArrowRightIcon } from '@heroicons/react/solid';
import Pagination from '@mui/material/Pagination';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Moment from 'react-moment';

import { ArticleProps } from 'types/article';

type NewsTypeProps = {
  item: {
    name: string;
    content: ArticleProps[];
  };
};

const NewsType = ({ item }: NewsTypeProps): JSX.Element => {
  const postPerPage = 9;
  const totalPage = Math.ceil(item.content.length / postPerPage) || 1;
  const [currentPage, setCurrentPage] = useState(1);

  const data = item.content.filter(
    (_value, index) => index >= (currentPage - 1) * postPerPage && index < currentPage * postPerPage
  );

  const onChangePage = (_event: React.ChangeEvent<unknown>, page: number) => setCurrentPage(page);

  return (
    <>
      <div key={item.name} className="flex flex-col items-center border-t-[3px] mb-20 border-primary">
        <div className="flex flex-col w-full gap-y-5">
          <div className="flex">
            <div className="relative flex uppercase items-center text-xl h-14 px-4 font-bold text-white w-52 sm:w-80 rounded-bl-lg bg-primary after:content-[''] after:block after:w-10 after:h-full after:bg-primary after:absolute after:top-0 after:right-[-20px] after:skew-x-[-20deg] after:rounded-br-lg">
              {item.name}
            </div>
          </div>

          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 md:gap-x-12 gap-y-9">
            {data.map(article => (
              <div key={article.id} className="flex flex-col w-full">
                <div className="overflow-hidden cursor-pointer">
                  <div className="relative">
                    <Image
                      alt="Image Alt"
                      src={article?.attributes?.image?.data?.attributes?.url}
                      height={210}
                      width={356}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                </div>

                <div className="flex items-center mt-3 text-sm gap-x-5">
                  <div className="flex items-center h-full mr-5">
                    <div className="grid mr-1 place-items-center text-primary">
                      <div className="mr-1 relative top-[-1px]">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M7 8C9.1875 8 11 6.21875 11 4C11 1.8125 9.1875 0 7 0C4.78125 0 3 1.8125 3 4C3 6.21875 4.78125 8 7 8ZM9.78125 9H9.25C8.5625 9.34375 7.8125 9.5 7 9.5C6.1875 9.5 5.40625 9.34375 4.71875 9H4.1875C1.875 9 0 10.9062 0 13.2188V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V13.2188C14 10.9062 12.0938 9 9.78125 9Z"
                            fill="#316FDC"
                          />
                        </svg>
                      </div>
                    </div>

                    <div>{article?.attributes?.author?.data?.attributes?.name}</div>
                  </div>

                  <div className="flex items-center h-full">
                    <div className="relative grid mr-2 place-items-center text-secondary top-[-2px]">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0 14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V6H0V14.5ZM10 8.375C10 8.1875 10.1562 8 10.375 8H11.625C11.8125 8 12 8.1875 12 8.375V9.625C12 9.84375 11.8125 10 11.625 10H10.375C10.1562 10 10 9.84375 10 9.625V8.375ZM10 12.375C10 12.1875 10.1562 12 10.375 12H11.625C11.8125 12 12 12.1875 12 12.375V13.625C12 13.8438 11.8125 14 11.625 14H10.375C10.1562 14 10 13.8438 10 13.625V12.375ZM6 8.375C6 8.1875 6.15625 8 6.375 8H7.625C7.8125 8 8 8.1875 8 8.375V9.625C8 9.84375 7.8125 10 7.625 10H6.375C6.15625 10 6 9.84375 6 9.625V8.375ZM6 12.375C6 12.1875 6.15625 12 6.375 12H7.625C7.8125 12 8 12.1875 8 12.375V13.625C8 13.8438 7.8125 14 7.625 14H6.375C6.15625 14 6 13.8438 6 13.625V12.375ZM2 8.375C2 8.1875 2.15625 8 2.375 8H3.625C3.8125 8 4 8.1875 4 8.375V9.625C4 9.84375 3.8125 10 3.625 10H2.375C2.15625 10 2 9.84375 2 9.625V8.375ZM2 12.375C2 12.1875 2.15625 12 2.375 12H3.625C3.8125 12 4 12.1875 4 12.375V13.625C4 13.8438 3.8125 14 3.625 14H2.375C2.15625 14 2 13.8438 2 13.625V12.375ZM12.5 2H11V0.5C11 0.25 10.75 0 10.5 0H9.5C9.21875 0 9 0.25 9 0.5V2H5V0.5C5 0.25 4.75 0 4.5 0H3.5C3.21875 0 3 0.25 3 0.5V2H1.5C0.65625 2 0 2.6875 0 3.5V5H14V3.5C14 2.6875 13.3125 2 12.5 2Z"
                          fill="#929292"
                        />
                      </svg>
                    </div>

                    <Moment format="MMM Do YYYY" className="flex items-center text-secondary">
                      {article?.attributes?.createdAt}
                    </Moment>
                  </div>
                </div>

                <div className="flex mt-3 text-xl font-bold cursor-pointer hover:text-primary">
                  <Link href={`media-news/${article?.attributes?.slug}`}>
                    <div>{article?.attributes?.title}</div>
                  </Link>
                </div>

                <div className="flex mt-3 mb-5 text-secondary line-clamp-3">{article?.attributes?.description}</div>

                <div className="flex mt-auto">
                  <Link href={`media-news/${article?.attributes?.slug}`}>
                    <button className="flex items-center py-3 font-bold bg-transparent border rounded-md px-9 gap-x-4 border-secondary hover:bg-primary hover:text-white">
                      <div className="grid place-items-center">Xem Thêm</div>

                      <div className="grid place-items-center">
                        <ArrowRightIcon width={16} height={16} />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end py-4">
        <Pagination count={totalPage} variant="outlined" shape="rounded" onChange={onChangePage} />
      </div>
    </>
  );
};

export default NewsType;
