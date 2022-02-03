import Gif from 'components/Gif';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import ProjectDescription from './ProjectDescription';

export default function ProjectSimpleLayout({ data, textPosition }) {
  const { title, titleGif, exhibition, location, date, description, pictures, pictureCredit } = data;
  console.log('hello', title);
  return (
    <>
      <div className='title position-absolute'>
        <Gif url={titleGif.file.url} className='w-100' alt={`${title} project animated title`} />
      </div>
      <div>
        {pictures.map((pic) => {
          return (
            <div className='pic-max-width my-0 mx-auto'>
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
        <div className='mt-3'>
          <ProjectDescription
            exhibition={exhibition}
            location={location}
            description={description}
            pictureCredit={pictureCredit}
            isTextBlurred={false}
          />
        </div>
      </div>
    </>
  );
}
