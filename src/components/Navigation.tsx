import React from 'react';
import { Link } from 'gatsby';
import { mapNavigationToUrl } from '../config';
import infoBubble from '../images/info-sm.png';

export default function Navigation({ brand, links, location }) {
  const [link] = links;

  return (
    <Link to={mapNavigationToUrl[link]} id='navigation' className='position-fixed p-0'>
      <img src={infoBubble} alt='' />
    </Link>
  );
}
