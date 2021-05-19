import Link from '@material-ui/core/Link';
import { Link as RouteLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import PATHS from '../../config/webPath';
function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link component={RouteLink} color="inherit" to={PATHS.HOME}>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Footer;
