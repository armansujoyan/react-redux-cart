import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home-page';
import CartPage from './pages/cart-page';

const Router = () => (
    <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/cart" exact={true} component={CartPage} />
    </Switch>
)

export default Router;