import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { AccountCircle, ExitToApp } from '@material-ui/icons';

import PATHS from '../../config/webPath';
import authAction from '../../actions/authAction';
import profileAction from '../../actions/profileAction';
import ColorContext from '../../contexts/ColorContext';
import DummyComp from './DummyComp';

import StoreContext from '../../contexts/StoreContext';

const AuthButtons = () => {

  const { state, updateValues } = useContext(StoreContext);

  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(authAction.logout());
    dispatch(profileAction.removeDetails());
  };

  return (
    <>
      <button onClick={()=>updateValues('welcomeText','Wecome')}>
        {state.welcomeText || 'W'}
      </button>
      <button onClick={()=>updateValues('welcomePhrase','Learning Context API')}>
        {state.welcomePhrase || 'para'}
      </button>
      <DummyComp />
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
        <IconButton
          aria-label="logout user"
          aria-controls="primary-search-logout-menu"
          aria-haspopup="true"
          color="inherit"
          onClick={onLogout}
        >
          <ExitToApp />
        </IconButton>
      </>
      }
      {
        !auth &&
        <ColorContext.Consumer>
          {(color)=><IconButton
            component={Link}
            to={PATHS.LOGIN}
            aria-label="login user"
            aria-controls="primary-search-login-menu"
            aria-haspopup="true"
            color={color}
            size="small"
          >
        Login
          </IconButton>}
        </ColorContext.Consumer>
      }
    </>
  );
};

export default AuthButtons;
