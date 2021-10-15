import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import Copyright from '../navbar/copyright';
import Deposits from '../../lib/card';
import TableProcess from './table';

import { processData, } from '../../services/server'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  paperTitle: {
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    color: 'ff595e',
    height: 95,
  },
  fixedHeight: {
    height: 200,
  },
  fixedHeightChart: {
    height: 433,
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function DashboardProcess() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightPaperChart = clsx(classes.paper, classes.fixedHeightChart);

  const [dataCard, setData] = useState({
    registered: 50,
    running: 50,
    sleeping: 50,
    stopped: 50,
    zombie: 50,
    data: [],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      processData()
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log("T.T Error en el servidor");
          console.log(error);
        });
    }, 3000)
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>  
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} >
              <Paper className={classes.paperTitle} >
                <h1 align="center">Administrador de Procesos</h1>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <Deposits title={"Total de procesos registrados"} fact={dataCard.registered} value={3} dimensional={""}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <Deposits title={"Running"} fact={dataCard.running} value={4} dimensional={""}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <Deposits title={"Sleeping"} fact={dataCard.sleeping} value={5} dimensional={""}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={8}>
              <Paper className={fixedHeightPaperChart}>
                  <TableProcess dataTable={dataCard.data}/>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper className={fixedHeightPaper}>
                  <Deposits title={"Stopped"} fact={dataCard.stopped} value={6} dimensional={""}/>
                </Paper>
              </Grid>
              <Divider className={classes.divider}/>
              <Grid item  xs={12} md={12} lg={12}>
                <Paper className={fixedHeightPaper}>
                  <Deposits title={"Zombie"} fact={dataCard.zombie} value={7} dimensional={""}/>
                </Paper>
              </Grid>
            </Grid>  
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}