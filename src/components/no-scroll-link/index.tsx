import Link, { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';

type NoScrollLinkProps = LinkProps & {
  children: ReactNode;
};

const NoScrollLink = ({ children, href, passHref = true }: NoScrollLinkProps) => (
  <Link href={href} passHref={passHref} scroll={false}>
    {children}
  </Link>
);

export default NoScrollLink;
