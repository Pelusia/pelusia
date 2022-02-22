import classNames from 'classnames';
import * as React from 'react';

export default function ProjectDescription({ exhibition, location, description, pictureCredit, isTextBlurred }) {
  const { html: descriptionHtml } = description.childMarkdownRemark;
  return (
    <div
      className={classNames('description-max-width', {
        'blur-fade-in': isTextBlurred,
        'blur-fade-out': !isTextBlurred,
      })}
    >
      <p className='details'>
        {exhibition ? <span className='exhibition me-2'>{exhibition},</span> : null}
        {location ? <span className='location me-2'>{location}</span> : null}
      </p>
      <p
        className='description'
        dangerouslySetInnerHTML={{
          __html: descriptionHtml,
        }}
      />
      <small
        className='credit'
        dangerouslySetInnerHTML={{
          __html: pictureCredit?.childMarkdownRemark.html || '',
        }}
      />
    </div>
  );
}
