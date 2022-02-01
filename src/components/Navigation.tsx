import React, { useState } from 'react';
import { Link } from 'gatsby';
import bubble from '../images/info-sm.png';
import InfoBubble from './InfoBubble';

export default function Navigation({ brand, links, location, bio }) {
  const [infoIsShown, setInfoIsShown] = useState(false);

  const showInfoBubble = (boo: boolean) => {
    console.log('show trigger');
    if (infoIsShown === boo) {
      return;
    }
    setInfoIsShown(boo);
  };

  return (
    <div className='d-inline' onMouseOver={() => showInfoBubble(true)} onMouseOut={() => showInfoBubble(false)}>
      <Link to={location?.pathname === '/' ? 'info' : '/'} id='navigation' className='position-fixed p-0'>
        <img src={bubble} alt='' className='d-inline' />
      </Link>
      <InfoBubble brand={brand} links={links} bio={bio} isVisible={infoIsShown} />
    </div>
  );
}
