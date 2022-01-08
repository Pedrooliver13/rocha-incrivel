import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';

import { PrivateRouteProps } from 'types/routes/privateRoutes';

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ roles }) => {
  const token = Cookies.get('token');
  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  if (roles && roles.length > 0) {
    const userRoles = JSON.parse(token).roles;

    if (!userRoles || !userRoles.length) {
      return <Navigate to="/" />;
    }

    if (!userRoles.some((role: string) => roles.includes(role))) {
      return <Navigate to="/" />;
    }
  }

  return <Outlet />;
};
