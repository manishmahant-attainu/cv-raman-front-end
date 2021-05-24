import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyle from "./ProfileStyle";
import { Redirect } from "react-router-dom";
import PATHS from "../../config/webPath";

const Profile = (props) => {

  const auth = useSelector(state => state.auth);
  const userInfo = useSelector(state => state.profile);

  const classes = useStyle();
  return (
    <main>
      {
        auth ?
        <Container className={classes.cardGrid} maxWidth="xl">
          <Grid
            container
            spacing={4}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={userInfo.imageUrl}
                title={userInfo.fullName}
              />
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
