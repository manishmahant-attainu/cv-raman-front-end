import { Link } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import IconButton from '@material-ui/core/IconButton';
import { AccountCircle, ExitToApp } from '@material-ui/icons';

import PATHS from '../../config/webPath';
import googleConfig from '../../config/google.json';

const AuthButtons = () => {

  const onLogin = (response) => {
    console.log(response);
  }

  const onLogout = () => {
    console.log('Logout');
  }

  return (
    <>
      <IconButton
        component={Link}
        to={PATHS.PROFILE}
        edge="end"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="false"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <GoogleLogout
        clientId={googleConfig.clientId}
        buttonText="Logout"
        onLogoutSuccess={onLogout}
        render={renderProps => (
          <IconButton
            aria-label="logout user"
            aria-controls="primary-search-logout-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <ExitToApp />
          </IconButton>
        )}
      />
      <GoogleLogin
        clientId={googleConfig.clientId}
        onSuccess={onLogin}
        onFailure={onLogin}
        buttonText="Login"
        isSignedIn={true}
        render={renderProps => (
          <IconButton
            aria-label="login user"
            aria-controls="primary-search-login-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            size="small"
          >
            Login
          </IconButton>
        )}
      />
    </>
  )
};

export default AuthButtons;
