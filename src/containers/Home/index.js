import { useEffect } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import VideoCard from '../../components/VideoCard';
import useStyles from './HomeStyle';
import videoAction from '../../actions/videoAction';

const Home = (props) => {
  const { dispatch, videos } = props;
  const classes = useStyles();

  useEffect(()=>{
    dispatch(videoAction.list(''))
  },[dispatch]);

  return (
      <main>
        <Container className={classes.cardGrid} maxWidth="xl">
          <Grid container spacing={4}>
            {
              videos.map((video,i) => (
                <VideoCard key={i} video={video}/>
              ))
            }
          </Grid>
        </Container>
      </main>
  );
};

const mapStateToProps = ({videos}) => ({videos});

export default connect(mapStateToProps)(Home);