/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PlantsPage from './pages/Plants'
import SearchedPlantPage from './pages/Plant'

render(<BrowserRouter>
  <Switch>
    <Route exact path="/" component={PlantsPage} />
    <Route path="/plants" component={SearchedPlantPage} />
    {/* <Route path="*" component={ErrorPage} /> */}
  </Switch>
</BrowserRouter>,
document.getElementById('root'))
