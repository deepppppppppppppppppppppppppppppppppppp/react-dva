import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import dynamic from 'dva/dynamic'

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      component: () => import('./routes/IndexPage')
    },
    {
      path: '/listData',
      models: () => [import('./models/listData')],
      component: () => import('./routes/listData')
    }
  ]

  // const listData = dynamic({
  //   app,
  //   models: [import('./models/listData')],
  //   component: () => import('./routes/listData')
  // })

  // routes.map(({ path, ...dynamics }, key) => {
  //   console.log(path)
  //   console.log(dynamics)
  //   console.log(key)
  // })

  return (
    <Router history={history}>
      <Switch>
        {routes.map(({ path, ...dynamics }, key) => (
          <Route
            key={key}
            exact
            path={path}
            component={dynamic({
              app,
              ...dynamics
            })}
          />
        ))}
      </Switch>
    </Router>
    // <Router history={history}>
    //   <Switch>
    //     <Route path="/" exact component={IndexPage} />
    //     <Route path="/list" component={listData} />
    //   </Switch>
    // </Router>
  )
}

export default RouterConfig
