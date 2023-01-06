export type ArticleProps = {
  id: string;
  attributes: {
    author: {
      data: {
        id: number;
        attributes: {
          createdAt: string;
          email: string;
          name: string;
          updatedAt: string;
        };
      };
    };
    content: string;
    createdAt: string;
    category: {
      data: {
        id: string;
        attributes: {
          name: string;
        };
      };
    };
    description: string;
    image: {
      data: {
        id: string;
        attributes: {
          url: string;
        };
      };
    };
    publishedAt: string;
    slug: string;
    title: string;
    updatedAt: string;
  };
};
