import React, { Component } from 'react'
import { Navigate, Outlet } from "react-router-dom";

import Redirect from '../custom/Redirect'
import auth from './auth-helper'

const PrivateRoute = () => {
  const isAuthenticated = auth.isAuthenticated();
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute
