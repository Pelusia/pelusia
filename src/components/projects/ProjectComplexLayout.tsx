import classNames from 'classnames';
import Gif from 'components/Gif';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import max from 'lodash/max';

const picClassNamesByIndex = {
  0: 'order-xl-1',
  1: 'order-xl-2',
  2: 'order-xl-3',
  3: 'order-xl-4',
};
const picClassNamesByLayout = {
  'text-right': 'order-xl-1',
  'text-left': 'order-xl-2',
  2: 'order-xl-3',
  3: 'order-xl-4',
};

export default function ProjectComplexLayout({ data, textPosition }) {
  const { title, titleGif, exhibition, location, date, description, pictures } = data;

  const [isTextBlurred, setIsTextBlurred] = useState(true);

  const whRatios = pictures.map((pic) => {
    const { width, height } = pic.gatsbyImageData;
    return height - width;
  });
  const highestRatioPicIndex = whRatios.indexOf(max(whRatios));
  console.log(highestRatioPicIndex);
  const isLayoutLeft = textPosition === 'text-left';

  return (
    <>
      <h2 className='visually-hidden'>{title}</h2>
      <div className='container-fluid position-relative project-layout-complex gx-0'>
        <div className='title position-absolute'>
          <Gif url={titleGif.file.url} className='w-100' />
        </div>
        <ul className='row list-unstyled gx-2'>
          {pictures.map((pic, i) => {
            let classNames = picClassNamesByIndex[i];
            if (i === highestRatioPicIndex) {
              classNames += ' col-auto order-2';
            } else {
              classNames += ' col-12 col-xl order-1';
            }
            if (!isLayoutLeft) {
              // classNames += ' col-xl-auto';
            }
            return (
              <li className={classNames}>
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
          <li
            className={classNames('col-auto', {
              'order-3': !isLayoutLeft,
              'order-0': isLayoutLeft,
            })}
            onMouseOver={() => setIsTextBlurred(false)}
            onMouseOut={() => setIsTextBlurred(true)}
          >
            <div
              className={classNames('description-max-width', {
                'blur-fade-in': isTextBlurred,
                'blur-fade-out': !isTextBlurred,
              })}
            >
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
