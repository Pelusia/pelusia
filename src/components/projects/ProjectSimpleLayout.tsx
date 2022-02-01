import Gif from 'components/Gif';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

export default function ProjectSimpleLayout({ data, textPosition }) {
  const { title, titleGif, exhibition, location, date, description, pictures } = data;
  return (
    <>
      <h2 className='visually-hidden'>{title}</h2>
      <div className='container-fluid position-relative project-layout-simple'>
        <div className='title position-absolute'>
          <Gif url={titleGif.file.url} className='w-100' />
        </div>
        <ul className='row list-unstyled'>
          {pictures.map((pic) => {
            return (
              <li className='col-12 col-xl order-1 order-xl-2'>
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
              </li>
            );
          })}
          <li className='col order-3'>
            <div className='description-max-width'>
              <p className='details'>
                {exhibition ? <span className='exhibition me-2'>{exhibition},</span> : null}
                {location ? <span className='location me-2'>{location},</span> : null}
                <span className='date me-2'>{date}</span>
              </p>
              <p
                className='description'
                dangerouslySetInnerHTML={{
                  __html: description.childMarkdownRemark.html,
                }}
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
