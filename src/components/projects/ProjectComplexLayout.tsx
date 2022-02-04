import classNames from 'classnames';
import Gif from 'components/Gif';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import max from 'lodash/max';
import ProjectDescription from './ProjectDescription';
import { getBreakpoint, projectTitleWidth } from 'config';

const picClassNamesByIndex = {
  0: 'order-xl-1',
  1: 'order-xl-2',
  2: 'order-xl-3',
  3: 'order-xl-4',
};
const picHightRatioMobileOrderByLayout = {
  'text-right': 'order-2',
  'text-left': 'order-3',
};

export default function ProjectComplexLayout({ data, textPosition }) {
  const isLayoutLeft = textPosition === 'text-left';
  const [isTextBlurred, setIsTextBlurred] = useState(true);
  const { title, titleGif, exhibition, location, date, description, pictures, pictureCredit } = data;
  const whRatios = pictures.map((pic) => {
    const { width, height } = pic.gatsbyImageData;
    return height - width;
  });
  const highestRatioPicIndex = whRatios.indexOf(max(whRatios));
  const breakpoint = getBreakpoint();

  return (
    <>
      <div className='title position-absolute'>
        <Gif
          url={titleGif.file.url}
          className='w-100'
          height={projectTitleWidth[breakpoint]}
          alt={`${title} project animated title`}
        />
      </div>
      <ul className='row list-unstyled gx-3 justify-content-center'>
        {pictures.map((pic, i) => {
          const iLayout = isLayoutLeft ? i + 1 : i; // text is in order 1 in layout left
          let classNames = picClassNamesByIndex[iLayout];
          let picClassName = 'pic-max-height';
          if (i === highestRatioPicIndex) {
            const orderSm = picHightRatioMobileOrderByLayout[textPosition];
            classNames += ` col col-xl-auto ${orderSm}`;
            picClassName += ' high-ratio-pic-max-width';
          } else {
            classNames += ` col-12 col-xl order-1 mb-3 mb-xl-0`;
          }
          return (
            <li className={classNames}>
              {pic.file.contentType.includes('gif') ? (
                <Gif url={pic.file.url} alt={`${title} project animated picture`} className={picClassName} />
              ) : (
                <GatsbyImage
                  objectFit='contain'
                  image={getImage(pic)!}
                  alt={`${title} project picture`}
                  className={picClassName}
                />
              )}
            </li>
          );
        })}
        <li
          className={classNames('col col-xl-auto', {
            'order-3': !isLayoutLeft,
            'order-1': isLayoutLeft,
          })}
          onMouseOver={() => setIsTextBlurred(false)}
          onMouseOut={() => setIsTextBlurred(true)}
        >
          <ProjectDescription
            exhibition={exhibition}
            location={location}
            description={description}
            pictureCredit={pictureCredit}
            isTextBlurred={isTextBlurred}
          />
        </li>
      </ul>
    </>
  );
}
