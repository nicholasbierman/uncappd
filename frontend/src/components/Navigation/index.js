import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul class="navbar sticky-top">
      <li class="nav-item">
        <NavLink className="nav-link" exact to="/home">Uncappd</NavLink>
        {isLoaded && sessionLinks}
      </li>
      {sessionUser && 
      <div class="navbar-link-container">
        <li class="nav-item">
          <NavLink className="nav-link" to="/checkin">Check In</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/beers">Beers</NavLink>
        </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/breweries">Breweries</NavLink>
      </li>
      <li class="nav-item">
        <NavLink id="supporter" classname="nav-link" to="/supporter">Supporter</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/help">Help</NavLink>
        </li>
      </div>
      }
      </ul>
  );
}

export default Navigation;