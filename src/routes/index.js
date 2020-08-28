import React from 'react'
import { BrowserRouter, Switch, Route, Link, Router } from 'react-router-dom'

import Button from '../components/Button'
import Table from '../components/Table'
import { routesData } from './routesData'

const Home = () => {
  return (
    <div style={{ margin: '30px' }}>
      <h1>Venus Ui</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          flexDirection: 'column',
          // width: '600px',
          height: '100px',
          fontSize: '20px',
          // alignContent: 'space-evenly',
          color: '#010101',
          margin: '30px',
        }}
      >
        <div>
          <Link to="/table">Table</Link>
        </div>
        <div>
          <Link to="/button">Button</Link>
        </div>
      </div>
    </div>
  )
}

const routesObj = {
  Home,
  Button,
  Table,
}

const AppRouteSetUp = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (rest.path !== '/') {
        return (
          <div
            style={{
              fontSize: '20px',
              color: '#010101',
            }}
          >
            <div style={{ margin: '30px' }}>
              <Link to="/">Home</Link>
            </div>
            <div style={{ margin: '30px' }}>
              <Component {...props} />
            </div>
          </div>
        )
      }
      return <Component {...props} />
    }}
  />
)

const RouteComponent = ({ component }) => {
  let Component = routesObj[component]
  return <Component />
}

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routesData.map(data => {
          return (
            <AppRouteSetUp
              exact={data.exact}
              key={data.uid}
              path={data.route}
              component={() => <RouteComponent component={data.component} />}
            />
          )
        })}
        <Route component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRoutes
