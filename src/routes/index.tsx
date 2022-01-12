import { Routes as Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Users from 'pages/Users';
import Cards from 'pages/Cards';
import CardsForm from 'pages/Cards/CardForm';
import Audits from 'pages/Audits';
import Page404 from 'pages/Page404';
import { PrivateRoute } from 'routes/PrivateRoute';

import { ERoles } from 'routes/PrivateRoute/constants';

const Routes = () => {
  return (
    <Switch>
      <Route path="/sign-in" element={<Login />} />

      <Route element={<PrivateRoute roles={[ERoles.allAcess]} />}>
        <Route path="/audits" element={<Audits />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/cards/:id" element={<CardsForm />} />
        <Route path="/cards/new" element={<CardsForm />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} caseSensitive />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Switch>
  );
};

export default Routes;
