import React from 'react';
import { Link } from 'gatsby';

export default function Footer({ title, links }) {
  return (
    <footer id='footer'>
      <small>
        <ul className='list-unstyled ms-0 mb-0 d-flex flex-row justify-content-start'>
          {links.map((link) => (
            <li className='me-2 mb-1' key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </small>
      <div className='d-flex flex-column flex-sm-row justify-content-start justify-content-sm-between align-items-start p-0'>
        <small className='legal mb-1'>
          <nav className='d-inline'>
            <Link to='/imprint'>Imprint</Link> &middot; <Link to='/privacy-policy'>Privacy Policy</Link>&nbsp;
          </nav>
          <span>&copy; {new Date().getFullYear()}&nbsp;</span>
          <span className='text-nowrap'>{title}</span>
        </small>
        <small className='credits'>
          Website by&nbsp;
          <a href='https://vincentreynaud.de' target='_blank' rel='noopener noreferrer'>
            Vincent Reynaud
          </a>
        </small>
      </div>
    </footer>
  );
}
