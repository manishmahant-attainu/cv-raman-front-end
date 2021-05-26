import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { YouTube } from '@material-ui/icons';

import Search from '../Search';

import useStyles from './AppNavBarStyle';
import PATHS from '../../config/webPath';
// import AuthButtons from '../AuthButtons';
import CustomAuth from '../CustomAuth';

export default function AppNavBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            component={RouteLink}
            to={PATHS.HOME}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <YouTube />
          </IconButton>
          <Typography className={classes.title}>
            <Link component={RouteLink} to={PATHS.HOME} color="inherit">Home</Link>
          </Typography>
          <Search />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <CustomAuth />
            {/* <AuthButtons /> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
