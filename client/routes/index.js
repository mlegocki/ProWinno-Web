import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Main, Home, Posting } from '../containers'

import '../stylesheets/app.scss';

const Routes = () =>
  (
    <Main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/postings" component={Posting} />
      </Switch>
    </Main>
  )


export default Routes;

