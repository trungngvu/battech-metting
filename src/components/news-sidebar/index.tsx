import Image from 'next/image';
import Link from 'next/link';
import Moment from 'react-moment';

import { ArticleProps } from 'types/article';

type NewsSidebarProps = {
  name: string;
  data: ArticleProps[];
  max: number;
};

const NewsSidebar = ({ name, data, max }: NewsSidebarProps) => (
  <div className="flex flex-col w-ful">
    <div className="flex flex-col p-6 bg-white border border-solid w-ful border-border">
      <div className="text-2xl font-bold text-g">{name}</div>
      <div className="mt-1 border-2 border-solid w-14 border-primary" />

      <div className="flex flex-col pt-5 gap-y-7">
        {data.slice(0, max).map(({ attributes: { title, slug, createdAt, image } }, index) => (
          <div className="grid grid-cols-3 gap-x-4" key={index}>
            <Image
              src={image?.data?.attributes?.url}
              width="100%"
              height="70px"
              layout="responsive"
              objectFit="cover"
              alt="news"
            />

            <div className="flex flex-col col-span-2">
              <Link href={slug} className="cursor-pointer">
                <div className="text-base text-black cursor-pointer line-clamp-2">{title}</div>
              </Link>

              <div className="pt-2 text-sm text-secondary">
                <Moment format="MMM Do YYYY">{createdAt}</Moment>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default NewsSidebar;
