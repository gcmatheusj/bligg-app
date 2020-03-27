import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

import api from '../../services/api';

import Candidate from '../../components/Candidate';
import Recruiters from '../../components/Recruiter';
import Login from '../../components/Login';
import Snackbar from '../../components/Snackbar';

import professionals from '../../images/2753.jpg'
import logo from '../../images/bliggiTmpLogo.png'

function Copyright () {
  return (
    <Typography variant="body2" align="center" style={{ color: '#fff' }}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Bliggi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   minHeight: '100vh',
  //   background: '#fff'
  // },
  root: {
    flexGrow: 1,
    background: '#fff'
  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  grid: {
    marginTop: theme.spacing(4)
  },
  button: {
    fontWeight: 'bold',
    minWidth: '20vh',
    marginBottom: 14
  },
  footer: {
    padding: theme.spacing(2, 2),
    marginTop: 'auto',
    color: '#fff',
    backgroundColor: theme.palette.primary.dark,
    opacity: 0.7
  },
}));

export default function App () {
  const classes = useStyles();
  const [openCandidate, setOpenCandidate] = useState(false);
  const [openRecruiters, setOpenRecruiters] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [countCandidate, setCountCandidate] = useState(0);

  useEffect(() => {
    async function getCandidateList () {
      setCountCandidate(await api.get('users'));
    }
    getCandidateList();
  }, []);

  const onSubmitCandidate = async formData => {
    await api.post('users', formData);

    setOpenSnack(true)
    setOpenCandidate(false)
  };

  const onSubmitLogin = async formData => {
    if (formData.profile === 'Candidate') {
      await api.post('auth/user', formData);
    } else {
      await api.post('auth/recruiter', formData);
    }
    setOpenSnack(true)
    setOpenLogin(false)
  };

  const onSubmitRecruiter = async formData => {
    await api.post('recruiter', formData);

    setOpenSnack(true)
    setOpenRecruiters(false)
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Grid container
          style={{ marginTop: 20 }}
          justify="center"
          alignItems="space-between"
        >
          <Grid item >
            <img src={logo} alt="bliggi" />
          </Grid>
          <Grid item style={{ marginBottom: 14 }}>
            <Button
              className={classes.button}
              variant="outlined"
              color="primary"
              onClick={() => setOpenLogin(true)}
            >
              SIGN IN
              </Button>
          </Grid>
        </Grid>
        <Paper style={{ padding: 30 }} variant="outlined">
          <Typography variant="h1" component="h1" align="center">
            {countCandidate}
          </Typography>
          <Typography style={{ marginTop: '0.35em', fontSize: 18 }} variant="h5" component="h2" align="center">
            People lost their jobs because COVID19 pandemy
            <br />
            Let's change that!
          </Typography>
          <Grid className={classes.grid} container justify="space-around">
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => setOpenCandidate(true)}
            >
              I lost my job
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => setOpenRecruiters(true)}
            >
              I want to hire
            </Button>
          </Grid>
        </Paper>
        <Login
          open={openLogin}
          handleClose={() => setOpenLogin(false)}
          handleLogin={onSubmitLogin}
        />
        <Candidate
          open={openCandidate}
          handleClose={() => setOpenCandidate(false)}
          handleCandidate={onSubmitCandidate}
        />
        <Recruiters
          open={openRecruiters}
          handleClose={() => setOpenRecruiters(false)}
          handleRecruiter={onSubmitRecruiter}
        />
        <Snackbar open={openSnack} handleClose={() => setOpenSnack(false)} message="Registered successfully" />
        <Grid container justify="center" style={{ marginTop: 20 }}>
          <img src={professionals} width={300} alt="professionals" />
        </Grid>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1" align="center" style={{ fontWeight: 600 }}>Made with love ❤.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div >
  );
}