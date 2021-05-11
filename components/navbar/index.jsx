import React from 'react'
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'
import LoginButton from '../LoginButton'
import LogoutButton from '../LogoutButton'
import SignupButton from '../SignupButton'

export default () => (
  <>
    <Nav>
      {/* <NavLink to="/">
        <img alt="logo" />
      </NavLink> */}
      <NavMenu>
        <NavLink
          to="/"
          activeStyle={{
            fontWeight: 'bold',
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/mygarden"
          activeStyle={{
            fontWeight: 'bold',
          }}
        >
          My Garden
        </NavLink>
        {/* <NavLink
          to="/sign-up"
          activeStyle={{
            fontWeight: 'bold',

          }}
        >
          Sign Up
        </NavLink> */}
        {/* Second Nav */}
        <NavBtnLink to="/sign-in"><SignupButton /></NavBtnLink>
        <NavBtnLink to="/log-in"><LoginButton /></NavBtnLink>
        <NavBtnLink to="/log-out"><LogoutButton /></NavBtnLink>
      </NavMenu>
      <NavBtn>
        {/* <NavBtnLink to="/signin">Sign In</NavBtnLink> */}
      </NavBtn>
    </Nav>
  </>
)
