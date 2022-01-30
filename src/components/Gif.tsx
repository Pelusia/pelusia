import React from 'react';

export default function Gif({ className, alt, url }) {
  return <img src={`https:${url}`} alt={alt} className={className} />;
}
