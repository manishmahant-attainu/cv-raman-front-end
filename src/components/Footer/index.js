import Link from '@material-ui/core/Link';
import { Link as RouteLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PATHS from '../../config/webPath';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link component={RouteLink} color="inherit" to={PATHS.HOME}>
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  );
}

export default Footer;
