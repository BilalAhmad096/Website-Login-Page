import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';

import LoadingScreen from '../components/LoadingScreen';
import Products from 'modules/Products';
import DashboardLayout from 'layouts/DashboardLayout';

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('vendor/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: 'vendor',
      children: [
        { element: <Navigate to="/vendor/login" replace />, index: true },
      ],
    },
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="vendor/dashboard" /> },
        { path: 'vendor/dashboard', element: <Dashboard /> },
        { path: 'vendor/products', element: <Products /> },
        { path: 'vendor/products/create', element: <AddProduct /> },
        { path: 'vendor/products/create/discord', element: <AddDiscordApp /> },
        { path: 'vendor/products/edit/discord/:id', element: <AddDiscordApp /> },
      ],
    },
    {
      path: 'vendor/login',
      element: <Login />,
    },
    {
      path: 'vendor/register',
      element: <Register />,
    },
    {
      path: '*',
      element: <Navigate to="vendor/404" replace />,
    },
  ]);
}

const Login = Loadable(lazy(() => import('modules/Login')));
const Register = Loadable(lazy(() => import('modules/Register')))
const Dashboard = Loadable(lazy(() => import('modules/Dashboard')))
const AddProduct = Loadable(lazy(() => import('modules/AddProduct')))
const AddDiscordApp = Loadable(lazy(() => import('modules/AddDiscordApp')))