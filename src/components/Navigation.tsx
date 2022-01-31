import React from 'react';
import { Link } from 'gatsby';
import infoBubble from '../images/info-sm.png';

export default function Navigation({ brand, links, location }) {
  return (
    <Link to={location?.pathname === '/' ? 'info' : '/'} id='navigation' className='position-fixed p-0'>
      <img src={infoBubble} alt='' />
    </Link>
  );
}
