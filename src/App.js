import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Table from './components/views/Table/Table';
import TableNew from './components/views/TableNew/TableNew';
import Event from './components/views/Event/Event';
import EventNew from './components/views/EventNew/EventNew';
import Waiter from './components/views/Waiter/Waiter';
import Order from './components/views/Order/Order';
import OrderNew from './components/views/OrderNew/OrderNew';
import Kitchen from './components/views/Kitchen/Kitchen';

import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={TableNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Table} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={EventNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={Event} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={OrderNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={Order} />
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
        </Switch>

      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
