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
          className='bio mb-3'
          dangerouslySetInnerHTML={{
            __html: bio,
          }}
        ></div>
        <ul className='list-unstyled d-flex justify-content-center align-items-center'>
          {links.map((link, i) => {
            const id = link.name.toLowerCase();
            return (
              <li className={classNames({ 'me-4': i < links.length - 1 })}>
                <a
                  href={link.href}
                  target='_blank'
                  rel='noreferrer noopener'
                  className={classNames('link', { soundcloud: id === 'soundcloud' })}
                >
                  <img
                    src={mapLinkIdsToIcons[id]}
                    width='100%'
                    className={classNames('link-icon w-100', { soundcloud: id === 'soundcloud' })}
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
