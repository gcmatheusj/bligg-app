import React, { useState } from 'react';
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
import Snackbar from '../../components/Snackbar';

import professionals from '../../images/2753.jpg'

function Copyright() {
  return (
    <Typography variant="body2" align="center" style={{ color: '#fff'}}>
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
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: '#fff'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  grid: {
    marginTop: theme.spacing(6)
  },
  button: {
    fontWeight: 'bold',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    color: '#fff',
    backgroundColor: theme.palette.primary.dark,
    opacity: 0.7
  },
}));

export default function App() {
  const classes = useStyles();
  const [openCandidate, setOpenCandidate] = useState(false);
  const [openRecruiters, setOpenRecruiters] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);

  const onSubmitCandidate = async formData => {
    await api.post('user', formData);

    setOpenSnack(true)
    setOpenCandidate(false)
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
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Bliggi
        </Typography>
        <Paper style={{ padding: 30 }} variant="outlined">
          <Typography variant="h5" component="h2" align="center" gutterBottom>
            Because no virus will take you down.
          </Typography>
          <Typography  variant="h1" component="h1" align="center">
            2340
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
        <Grid container justify="center" style={{ marginTop: 20}}>
          <img src={professionals} width={350} alt="professionals" />
        </Grid>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1" align="center" style={{ fontWeight: 600}}>Made with love ❤.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}