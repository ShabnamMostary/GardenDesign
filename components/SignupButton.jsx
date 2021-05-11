import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  return (
    !isAuthenticated && (
      // eslint-disable-next-line react/button-has-type
      <button onClick={() => loginWithRedirect({
        screen_hint: 'signup',
      })}
      >
        Sign Up
      </button>
    )
  )
}
