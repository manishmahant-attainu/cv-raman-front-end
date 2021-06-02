import { useEffect, useReducer, useState, useMemo, useLayoutEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyle from './ProfileStyle';
import { Redirect } from 'react-router-dom';
import PATHS from '../../config/webPath';
import { useConnectionState, useLoader } from '../../hooks';
import Progress from './Progress';

const reducer = (state, action) => {
  switch (action.type) {
  case 'plus':
    return { width: state.width + action.diff };
  case 'minus':
    return { width: Math.max(state.width - action.diff, 2) };
  default:
    throw new Error('what\'s going on?' );
  }
};

const Profile = () => {
  const [ progress, dispatch ] = useReducer(reducer,{
    width: 15
  });

  const [ count, setCount ] = useState(0);
  const [ countTwo, setCountTwo ] = useState(0);
  const [ countThree, setCountThree ] = useState(0);


  const auth = useSelector(state => state.auth);
  const userInfo = useSelector(state => state.profile);
  const [ isonline ] = useConnectionState();
  const { startLoader, stopLoader } = useLoader();

  useEffect(()=>{
    console.log('useEffect');
    startLoader();
    const timeout = setTimeout(() => {
      stopLoader();
    }, 2000);
    return () => clearTimeout(timeout);
  },[startLoader, stopLoader]);

  const profile = useMemo(
    ()=>({ fullName: 'Manish Mahant' }),
    [count]
  );

  const consoleData = useCallback(
    (...a) => console.log(...a),
    [countTwo]
  );

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  }, []);

  const classes = useStyle();

  if(!isonline ) {
    return (
      <Container className={classes.cardGrid} maxWidth="xl">
        <Typography gutterBottom variant="h5" component="h1">
          Please connect to the Internet!!!
        </Typography>
      </Container>
    );
  }

  return (
    <main>
      {
        auth ?
          <Container className={classes.cardGrid} maxWidth="xl">
            <button onClick={()=>setCount(c=>c+1)}>Click Me!!({count})</button>
            <button onClick={()=>setCountTwo(c=>c+1)}>Click Me Also!!({countTwo})</button>
            <button onClick={()=>setCountThree(c=>c+1)}>Click Me Too!!({countThree})</button>
            <Progress log={consoleData} progress={progress} dispatch={dispatch} profile={profile} />
            <Grid
              container
              spacing={4}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Card className={classes.card}>
                {userInfo.imageUrl && <CardMedia
                  className={classes.cardMedia}
                  image={userInfo.imageUrl}
                  title={userInfo.fullName}
                />}
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {userInfo.fullName}
                  </Typography>
                  <Typography>
                    {userInfo.email}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Container>
          :
          <Redirect to={PATHS.HOME} />
      }
    </main>
  );
};

export default Profile;
