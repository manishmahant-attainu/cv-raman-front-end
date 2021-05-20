import { useSelector } from 'react-redux';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function Loader() {

  const loader = useSelector(state => state.loader);

  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={loader}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
