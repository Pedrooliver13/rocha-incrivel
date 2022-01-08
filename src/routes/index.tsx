import { Routes as Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Users from 'pages/Users';
import Cards from 'pages/Cards';
import { PrivateRoute } from 'routes/PrivateRoute';

const Routes = () => {
  return (
    <Switch>
      <Route path="/sign-in" element={<Login />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/cards" element={<Cards />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} caseSensitive />
      </Route>
    </Switch>
  );
};

export default Routes;
