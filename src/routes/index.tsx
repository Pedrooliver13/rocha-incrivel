import { Routes as Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Login from 'pages/Login';
import { PrivateRoute } from 'routes/PrivateRoute';

const Routes = () => {
  return (
    <Switch>
      <Route path="/sign-in" element={<Login />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Switch>
  );
};

export default Routes;
