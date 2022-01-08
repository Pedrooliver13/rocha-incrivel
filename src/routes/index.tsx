import { Routes as Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Users from 'pages/Users';
import Cards from 'pages/Cards';
import Audits from 'pages/Audits';
import Page404 from 'pages/Page404';
import { PrivateRoute } from 'routes/PrivateRoute';

const Routes = () => {
  return (
    <Switch>
      <Route path="/sign-in" element={<Login />} />

      <Route path="/audits" element={<PrivateRoute />}>
        <Route path="/audits" element={<Audits />} />
      </Route>

      <Route path="/" element={<PrivateRoute />}>
        <Route path="/cards" element={<Cards />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} caseSensitive />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Switch>
  );
};

export default Routes;
