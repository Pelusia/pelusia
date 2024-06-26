import React from 'react';
import { Link } from 'gatsby';

export default function Footer({ title, links }) {
  return (
    <footer id='footer'>
      <div className='d-flex flex-column justify-content-center align-items-center p-0'>
        {/* <p className='mb-1'>
          <ul className='list-unstyled ms-0 mb-0 d-flex flex-row justify-content-start'>
            {links.map((link) => (
              <li className='me-2 mb-1' key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </p> */}
        <p className='legal mb-1'>
          <span>
            <Link to='/imprint'>Imprint</Link> &middot; <Link to='/privacy-policy'>Privacy Policy</Link>&nbsp;
          </span>
          <span>&copy; {new Date().getFullYear()}&nbsp;</span>
          <span className='text-nowrap'>{title}</span>
        </p>
        <p className='credits'>
          Website design by&nbsp;
          <a href='https://maison-cc.de/' target='_blank' rel='noopener noreferrer' className='mb-2'>
            Maison C.C.
          </a>
          &nbsp; &amp; development by&nbsp;
          <a href='https://vincentreynaud.digital' target='_blank' rel='noopener noreferrer' className='text-nowrap'>
            Vincent Reynaud
          </a>
        </p>
      </div>
    </footer>
  );
}
