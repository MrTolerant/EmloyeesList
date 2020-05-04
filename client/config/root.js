/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import store, { history } from '../redux'

import Index from '../components/index'
import NavBar from '../components/NavBar'

import NotFound from '../components/404'

export default (props) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history} location={props.location} context={props.context}>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={() => <Index />} />
            <Route component={() => <NotFound />} />
          </Switch>
        </Router>
      </ConnectedRouter>
    </Provider>
  )
}
