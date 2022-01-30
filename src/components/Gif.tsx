import React from 'react';

type Props = {
  className?: string;
  alt?: string;
  url: string;
};

export default function Gif({ className, alt, url }: Props) {
  return <img src={`https:${url}`} alt={alt} className={className} />;
}
