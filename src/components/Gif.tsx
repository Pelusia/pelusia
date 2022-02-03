import React from 'react';
import Lazyload from 'react-lazyload';

type Props = {
  className?: string;
  alt?: string;
  url: string;
  height?: number;
};

export default function Gif({ className, alt, url, height }: Props) {
  return (
    <Lazyload height={height} offset={600} once>
      <img src={`https:${url}`} alt={alt} className={className} />
    </Lazyload>
  );
}
