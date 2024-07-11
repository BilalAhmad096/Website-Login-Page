import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Redirect({ to }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace: true });
  }, [navigate, to]);

  return null; // This component doesn't render anything
}

export default Redirect;
