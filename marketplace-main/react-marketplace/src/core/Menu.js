import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import auth from './../auth/auth-helper'
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';

import CartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import cart from './../cart/cart-helper'

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? { color: '#bef67a' } : { color: '#ffffff' };
  };

  const isPartActive = (path) => {
    return location.pathname.includes(path) ? { color: '#bef67a' } : { color: '#ffffff' };
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          MERN Marketplace
        </Typography>
        <div>
          <Link to="/">
            <IconButton aria-label="Home" style={isActive('/')}>
              <HomeIcon />
            </IconButton>
          </Link>
          <Link to="/shops/all">
            <Button style={isActive('/shops/all')}>All Shops</Button>
          </Link>
          <Link to="/auctions/all">
            <Button style={isActive('/auctions/all')}>All Auctions</Button>
          </Link>
          <Link to="/cart">
            <Button style={isActive('/cart')}>
              Cart
              <Badge invisible={false} color="secondary" badgeContent={cart.itemTotal()} style={{ marginLeft: '7px' }}>
                <CartIcon />
              </Badge>
            </Button>
          </Link>
        </div>
        <div style={{ position: 'absolute', right: '10px' }}>
          <span style={{ float: 'right' }}>
            {!auth.isAuthenticated() && (
              <span>
                <Link to="/signup">
                  <Button style={isActive('/signup')}>Sign up</Button>
                </Link>
                <Link to="/signin">
                  <Button style={isActive('/signin')}>Sign In</Button>
                </Link>
              </span>
            )}
            {auth.isAuthenticated() && (
              <span>
                {auth.isAuthenticated().user.seller && (
                  <>
                    <Link to="/seller/shops">
                      <Button style={isPartActive('/seller/')}>My Shops</Button>
                    </Link>
                    <Link to="/myauctions">
                      <Button style={isPartActive('/myauctions')}>My Auctions</Button>
                    </Link>
                  </>
                )}
                <Link to={`/user/${auth.isAuthenticated().user._id}`}>
                  <Button style={isActive(`/user/${auth.isAuthenticated().user._id}`)}>My Profile</Button>
                </Link>
                <Button
                  color="inherit"
                  onClick={() => {
                    auth.clearJWT(() => navigate('/'));
                  }}
                >
                  Sign out
                </Button>
              </span>
            )}
          </span>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
