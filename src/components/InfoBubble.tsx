import React from 'react';
import instagram from 'images/instagram.svg';
import email from 'images/email.svg';
import soundcloud from 'images/soundcloud.svg';
import youtube from 'images/youtube.svg';
import classNames from 'classnames';

const mapLinkIdsToIcons = {
  email,
  instagram,
  soundcloud,
  youtube,
};

export default function InfoBubble({ brand, links, bio, isVisible }) {
  return (
    <section
      id='info'
      className={classNames('position-fixed', {
        'fade-out': !isVisible,
        'fade-in': isVisible,
        'd-inline-block': isVisible,
      })}
    >
      <div className='position-absolute content'>
        <h1 className='mb-4'>{brand}</h1>
        <div
          className='bio mb-4'
          dangerouslySetInnerHTML={{
            __html: bio,
          }}
        ></div>
        <ul className='list-unstyled d-flex justify-content-center align-items-center'>
          {links.map((link) => {
            const id = link.name.toLowerCase();
            return (
              <li>
                <a href={link.href} target='_blank' rel='noreferrer noopener'>
                  <img
                    src={mapLinkIdsToIcons[id]}
                    width='100%'
                    className={classNames('link-icon w-100 me-4', { soundcloud: id === 'soundcloud' })}
                    alt={`${link.name} icon`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
