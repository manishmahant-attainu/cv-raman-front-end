import { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import VideoCard from '../../components/VideoCard';
import DummyModal from '../../components/DummyModal';
import useStyles from './HomeStyle';
import videoAction from '../../actions/videoAction';

const Home = (props) => {
  const { dispatch, videos } = props;
  const classes = useStyles();
  const [ open, setOpen ] = useState(false);

  const showError = useCallback(() => {
    setOpen(true);
  },[]);

  const hideError = () => {
    setOpen(false);
  };

  useEffect(()=>{
    dispatch(videoAction.list(''));
  },[dispatch]);

  return (
    <main>
      <Container className={classes.cardGrid} maxWidth="xl">
        <Grid container spacing={4}>
          {
            videos.map((video,i) => (
              <VideoCard key={i} video={video} showError={showError} />
            ))
          }
        </Grid>
        <DummyModal
          title="Auth Error"
          message="Login to see the video!!"
          open={open}
          close={hideError}
        />
      </Container>
    </main>
  );
};

const mapStateToProps = ({videos}) => ({videos});

export default connect(mapStateToProps)(Home);
