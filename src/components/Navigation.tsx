import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Container } from 'reactstrap';
import { mapNavigationToLinkName, mapNavigationToUrl } from '../config';
import classNames from 'classnames';

export default function Navigation({ brand, links, location }) {
  const [open, setOpen] = useState(false);

  const isNavbarBrandActive = location?.pathname === '/' ? true : false;

  return (
    <Navbar id='navigation' expand='lg' className='py-2 px-0 py-lg-0 align-items-start'>
      <div className='container-fluid container-lg flex-lg-column px-0 mx-0 position-relative'>
        <Link
          className={classNames('navbar-brand d-inline-block mt-0 mx-0 mb-2 py-0 pl-0 pr-1', {
            active: isNavbarBrandActive,
          })}
          to='/'
        >
          {brand}
        </Link>
        <NavbarToggler onClick={() => setOpen(!open)} className='position-absolute p-2'>
          MENU
        </NavbarToggler>
        <Collapse isOpen={open} navbar>
          <Nav className='nav-list mx-0' navbar vertical>
            {links.map((id) => (
              <NavItem className='mb-1' key={id}>
                <Link to={mapNavigationToUrl[id]} activeClassName='active' className='nav-link p-0'>
                  {mapNavigationToLinkName[id]}
                </Link>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}
