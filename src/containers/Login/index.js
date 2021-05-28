import React, { useState, useEffect, useRef } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { FormHelperText } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import useStyles from './LoginStyle';
import authAction from '../../actions/authAction';
import profileAction from '../../actions/profileAction';
import PATHS from '../../config/webPath';
import DummyModal from '../../components/DummyModal';
/**
  1. Authentication
      a) Login API
      b) A Form
      c) Login Component
      d) LocalStorage, SessionStorage, Cookies

  2. Ways to manage Redux State
      a) HOC
      b) Custom Routes
      c) Manually check in each route
      d) Adding checks in reducer itself

  3. How you want to manage Redux State
    a) Choose option d) of  2nd point
 */
export default function Login(props) {
  const classes = useStyles();
  const defaultErrors = {
    email: {},
    password: {}
  };

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const redirect = props.history.replace;

  const [ open, setOpen ] = useState(false);

  const [ errors, setErrors ] = useState(defaultErrors);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberRef = useRef(null);
  const dummyModalRef = useRef(null);
  const headPropRef = useRef(null);
  const submitRef = React.createRef(null);

  const formElement = (element) => {
    console.log(element);
    console.log(emailRef.current);
    console.log(dummyModalRef.current);
    console.log(headPropRef.current);
  }

  useEffect(() => {
    if(auth) {
      redirect(PATHS.HOME);
    }
    passwordRef.current.focus();
  }, [auth, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      remember: rememberRef.current.checked,
    }
    // submitRef.current.style.display = "none";
    // setTimeout(() => {
    //   submitRef.current.style.display = "block";
    // }, 5000);

    fetch('http://localhost:5000/api/v1/login',{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(resp => resp.json())
    .then(r => {
      if(r.errors) {
        setErrors(r.errors);
        dispatch(authAction.logout());
      } else {
        setErrors(defaultErrors);
        dispatch(authAction.login());
        dispatch(profileAction.getUserInfo(r));
      }
    })
    .catch(err=>{
      console.log(err);
      dispatch(authAction.logout());
    })
  }

  const openSignUp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(true);
  }

  const closeSignUp = (e) => {
    setOpen(false);
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form
            ref={formElement}
            onSubmit={submitHandler}
            className={classes.form}
            noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              ref={emailRef}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <FormHelperText>{errors?.email?.msg}</FormHelperText>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              inputRef={passwordRef}
              autoComplete="current-password"
            />
            <FormHelperText>{errors?.password?.msg || errors?.invalid?.msg}</FormHelperText>
            <FormControlLabel
              control={
                <Checkbox
                  inputRef={rememberRef}
                  value="remember"
                  color="primary"
                />
              }
              label="Remember me"
            />
            <Button
              ref={submitRef}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  component={RouteLink}
                  to={PATHS.SIGNUP}
                  variant="body2"
                  onClick={openSignUp}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <DummyModal headProp={headPropRef} ref={dummyModalRef} open={open} close={closeSignUp} />
    </>
  );
}