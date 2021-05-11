import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default () => {
  const { logout, isAuthenticated } = useAuth0()

  return (
    isAuthenticated && (
    // eslint-disable-next-line react/button-has-type
      <button onClick={() => logout()}>
        Log Out
      </button>
    )
  )
}
