import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { AccountCircle, ExitToApp } from '@material-ui/icons';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import PATHS from '../../config/webPath';
import googleConfig from '../../config/google.json';
import authAction from '../../actions/authAction';
import profileAction from '../../actions/profileAction';

const AuthButtons = () => {

  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const onLogin = (response) => {
    console.log(response);
    const { accessToken, tokenId, profileObj } = response;
    if(accessToken && tokenId) {
      dispatch(authAction.login());
      dispatch(profileAction.getDetails(profileObj));
    } else {
      dispatch(authAction.logout());
      dispatch(profileAction.removeDetails());
    }
  }

  const onLogout = () => {
    dispatch(authAction.logout());
    dispatch(profileAction.removeDetails());
  }

  return (
    <>
    {
      auth &&
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
      </>
    }
    {
      !auth &&
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
    }
    </>
  )
};

export default AuthButtons;
