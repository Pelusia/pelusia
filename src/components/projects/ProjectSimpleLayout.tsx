import Gif from 'components/Gif';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import ProjectDescription from './ProjectDescription';

export default function ProjectSimpleLayout({ data, textPosition }) {
  const [isTextBlurred, setIsTextBlurred] = useState(true);
  const { title, titleGif, exhibition, location, date, activeDescription: description, pictures, pictureCredit } = data;

  return (
    <>
      <div className='title position-absolute'>
        <Gif url={titleGif.file.url} className='w-100' alt={`${title} project animated title`} />
      </div>
      <div>
        {pictures.map((pic, i) => {
          return (
            <div key={i} className='pic-max-width my-0 mx-auto'>
              {pic.file.contentType.includes('gif') ? (
                <Gif url={pic.file.url} alt={`${title} project animated picture`} className='pic-max-height' />
              ) : (
                <GatsbyImage
                  objectFit='contain'
                  image={getImage(pic)!}
                  alt={`${title} project picture`}
                  className='pic-max-height'
                />
              )}
            </div>
          );
        })}
        <div className='mt-3' onMouseOver={() => setIsTextBlurred(false)} onMouseOut={() => setIsTextBlurred(true)}>
          <ProjectDescription
            exhibition={exhibition}
            location={location}
            description={description}
            pictureCredit={pictureCredit}
            isTextBlurred={isTextBlurred}
          />
        </div>
      </div>
    </>
  );
}
