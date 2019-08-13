import React from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Main from './pages/main'
import Product from './pages/product'
import New from './pages/new'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
            <Route path="/new" component={New} />
            <Redirect from='*' to='/' />
        </Switch>
    </BrowserRouter>
)

export default Routes