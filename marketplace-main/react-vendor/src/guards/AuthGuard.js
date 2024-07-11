import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '../services/context/AuthContext';

import Login from '../pages/Login';

export default function AuthGuard({ children }) {
  const { authToken } = useAuth()
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  if (!authToken) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
}
