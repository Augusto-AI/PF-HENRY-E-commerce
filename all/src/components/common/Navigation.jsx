/* eslint-disable indent */
import { FilterOutlined, ShoppingOutlined } from '@ant-design/icons';
import * as ROUTE from '@/constants/routes';
import logo from '@/images/logo-full.png';
import logoBlanco from '@/images/logo-full-blanco.png';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import {
  Link, NavLink, useLocation
} from 'react-router-dom';
import UserAvatar from '@/views/account/components/UserAvatar';
import BasketToggle from '../basket/BasketToggle';
import Badge from './Badge';
import FiltersToggle from './FiltersToggle';
import MobileNavigation from './MobileNavigation';
import SearchBar from './SearchBar';
import "../../App.css"
import { object } from 'prop-types';
import DarkMode from "../../darkMode";


const Navigation = () => {
  const navbar = useRef(null);
  const { pathname } = useLocation();

  const store = useSelector((state) => ({
    basketLength: state.basket.length,
    user: state.auth,
    isAuthenticating: state.app.isAuthenticating,
    isLoading: state.app.loading

  }));
  const darkMode = useSelector((state) => state.darkMode);

  const array = Object.values(darkMode)
  const darkModelo = array[0]
  console.log(darkModelo)


  const scrollHandler = () => {
    if (navbar.current && window.screen.width > 480) {
      if (window.pageYOffset >= 70) {
        navbar.current.classList.add('is-nav-scrolled');
      } else {
        navbar.current.classList.remove('is-nav-scrolled');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const onClickLink = (e) => {
    if (store.isAuthenticating) e.preventDefault();
  };

  // disable the basket toggle to these pathnames
  const basketDisabledpathnames = [
    ROUTE.CHECKOUT_STEP_1,
    ROUTE.SUCCESS,
    ROUTE.CHECKOUT_STEP_2,
    ROUTE.CHECKOUT_STEP_3,
    ROUTE.SIGNIN,
    ROUTE.SIGNUP,
    ROUTE.FORGOT_PASSWORD,
    ROUTE.ABOUT

  ];

  if (store.user && store.user.role === 'ADMIN') {
    return null;
  } if (window.screen.width <= 800) {
    return (
      <MobileNavigation
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...store}
        disabledPaths={basketDisabledpathnames}
        pathname={pathname}
      />
    );
  }
  //  //

  return (
    <nav className={`navigation ${darkModelo ? 'dark-mode' : ''}`} ref={navbar}>

      <div className="logo">
        <Link onClick={onClickLink} to="/"><img alt="Logo" src={darkModelo ? logoBlanco : logo} /></Link>

      </div>
      <DarkMode/>

      <ul className={`navigation-menu-main ${darkModelo ? 'dark-mode' : ''}`}>
        <li><NavLink style={darkModelo ? { color: 'white'} : {}} activeClassName={`navigation-menu-active ${darkModelo ? 'dark-mode' : ''}`} exact to={ROUTE.HOME}>Home</NavLink></li>
        <li><NavLink style={darkModelo ? { color: 'white'} : {}} activeClassName={`navigation-menu-active ${darkModelo ? 'dark-mode' : ''}`} to={ROUTE.SHOP}>Shop</NavLink></li>
        <li><NavLink style={darkModelo ? { color: 'white'} : {}} activeClassName={`navigation-menu-active ${darkModelo ? 'dark-mode' : ''}`} to={ROUTE.FEATURED_PRODUCTS}>Featured</NavLink></li>
        <li><NavLink style={darkModelo ? { color: 'white'} : {}} activeClassName={`navigation-menu-active ${darkModelo ? 'dark-mode' : ''}`} to={ROUTE.RECOMMENDED_PRODUCTS}>Recommended</NavLink></li>
        <li><NavLink style={darkModelo ? { color: 'white'} : {}} activeClassName={`navigation-menu-active ${darkModelo ? 'dark-mode' : ''}`} to={ROUTE.ABOUT}>About Us</NavLink></li>

      </ul>
      <div>
          <FiltersToggle>
            <button className={`button-muted button-small ${darkModelo ? 'dark-mode' : ''}`} style={{ padding: "1.1rem 1.8rem"}} type="button">
            &nbsp;
              <FilterOutlined />
            </button>
          </FiltersToggle>
      </div>
      <div className={` ${darkModelo ? 'dark-mode' : ''}`}>

        <SearchBar />
      </div>

      <ul className="navigation-menu">
        <li className={`navigation-menu-item ${darkModelo ? 'dark-mode' : ''}`}>
          <BasketToggle>
            {({ onClickToggle }) => (
              <button
              className={`button-link navigation-menu-link basket-toggle ${darkModelo ? 'dark-mode' : ''}`}
              disabled={basketDisabledpathnames.includes(pathname)}
              onClick={onClickToggle}
              type="button"
              >

                <Badge count={store.basketLength}>
                  <ShoppingOutlined style={{ fontSize: '2.4rem' }} />
                </Badge>
              </button>
            )}
          </BasketToggle>

        </li>
        {store.user ? (
          <li className={"navigation-menu-itemdark-mode"}>
            <UserAvatar />
          </li>
        ) : (
          <li className={`navigation-action ${darkModelo ? 'dark-mode' : ''}`} >
            {pathname !== ROUTE.SIGNUP && (
              <Link
                className={`button button-small ${darkModelo ? 'dark-mode' : ''}`}
                onClick={onClickLink}
                to={ROUTE.SIGNUP}
              >
                Sign Up
              </Link>
            )}
            {pathname !== ROUTE.SIGNIN && (
              <Link
                className={`button button-small button-muted margin-left-s ${darkModelo ? 'dark-mode' : ''}`}
                onClick={onClickLink}
                to={ROUTE.SIGNIN}
              >
                Sign In
              </Link>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
