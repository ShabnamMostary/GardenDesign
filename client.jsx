/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import PlantsPage from './pages/Plants'
import SearchedPlantPage from './pages/Plant'
import GardenPage from './pages/Garden'
import NavBar from './components/navbar'

const domain = 'dev-5tigvfk6.us.auth0.com'
const clientId = '5mlMIZwPhkwc0l9oRoNbOn08t5ll4nky'

render(<Auth0Provider
  domain={domain}
  clientId={clientId}
  redirectUri={window.location.origin}
>
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <PlantsPage />
      </Route>
      <Route path="/plants" component={SearchedPlantPage} />
      <Route path="/mygarden">
        <GardenPage />
      </Route>
      {/* <Route path="*" component={ErrorPage} /> */}
    </Switch>
  </BrowserRouter>
</Auth0Provider>,
document.getElementById('root'))
