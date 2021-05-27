import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import loaderAction from '../../actions/loaderAction';
import googleConfig from '../../config/google.json';
import PATHS from '../../config/webPath';

const useStyles = makeStyles((theme)=>({
  root: {
    // maxWidth: '75%',
    // maxHeight: '75%'
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const VideoDetails = (props) => {
  const { match, history } = props;
  const videoId = match.params?.id;
  const dispatch = useDispatch();
  const redirect = history.push;
  const classes = useStyles();

  const loading = useSelector(state => state.state);
  const auth = useSelector(state => state.auth);
  const [videoDetails, setVideoDetails] = useState({});

  const videoSrc = `https://www.youtube.com/embed/${videoId}`

  useEffect(() => {
    if(!auth) redirect(PATHS.HOME);
    else {
      dispatch(loaderAction.start());
      const params = new URLSearchParams({
        id: videoId,
        part: 'snippet',
        key: googleConfig.apiKey
      });
      const path = `https://www.googleapis.com/youtube/v3/videos?${params}`
      fetch(path)
        .then(res => res.json())
        .then(data => {
          if (data.items.length === 0) redirect(PATHS.HOME);
          else {
            setVideoDetails(data.items[0]);
            dispatch(loaderAction.stop());
          }
        })
        .catch(() => dispatch(loaderAction.stop()));
    }
  }, [auth, videoId, redirect, dispatch])

  return (
    <Container className={classes.cardGrid} maxWidth="xl">
      <Grid
        container
        spacing={4}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Card className={classes.root}>
          {
            !loading &&
            <CardActionArea>
              <iframe
                src={videoSrc}
                title={`Playing: -${videoDetails.snippet?.title}`}
                frameBorder="0"
                height="300"
                width="500"
                allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {videoDetails.snippet?.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {videoDetails.snippet?.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          }
        </Card>
      </Grid>
    </Container>
  );

};

export default VideoDetails;
