import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../services/context/AuthContext';

import { PATH_DASHBOARD } from '../routes/paths';

// ----------------------------------------------------------------------

GuestGuard.propTypes = {
  children: PropTypes.node
};

export default function GuestGuard({ children }) {
  const { authToken } = useAuth()

  if (authToken) {
    return <Navigate to={PATH_DASHBOARD.root} />;
  }

  return <>{children}</>;
}
