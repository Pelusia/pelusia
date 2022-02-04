import React, { useState } from 'react';
import { Link } from 'gatsby';
import bubble from '../images/info-sm.png';
import InfoBubble from './InfoBubble';
import classNames from 'classnames';

export default function Navigation({ brand, links, location, bio }) {
  const [infoIsShown, setInfoIsShown] = useState(false);
  const isHomePage = location?.pathname === '/';

  const showInfoBubble = (boo: boolean) => {
    console.log('show trigger');
    if (infoIsShown === boo) {
      return;
    } else if (!isHomePage) {
      setInfoIsShown(false);
      return;
    }
    setInfoIsShown(boo);
  };

  return (
    <div className='d-inline' onMouseOver={() => showInfoBubble(true)} onMouseOut={() => showInfoBubble(false)}>
      {isHomePage ? (
        <div
          id='navigation'
          className={classNames('position-fixed p-0', {
            'fade-out': infoIsShown,
            'fade-in': !infoIsShown,
          })}
        >
          <img src={bubble} alt='' className='info-link d-inline' />
        </div>
      ) : (
        <Link to='/' id='navigation' className='position-fixed p-0'>
          <img src={bubble} alt='' className='info-link d-inline' />
        </Link>
      )}
      <InfoBubble brand={brand} links={links} bio={bio} isVisible={infoIsShown} />
    </div>
  );
}
