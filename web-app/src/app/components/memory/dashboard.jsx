import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Copyright from '../navbar/copyright';
import Deposits from '../../lib/card';
import Chart from './chart';

import { memoryData, } from '../../services/server'

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
    height: 280,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [data, setData] = useState({total: 50,
    consumida: 50,
    porcentaje: 75,});
  const [seconds, setSeconds] = useState(0);
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightPaperChart = clsx(classes.paper, classes.fixedHeightChart);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 3);
      setData(memoryData());
      /*memoryData()
        .then((res) => {
          console.log("Datos ", res);
          setData(res.data);
        })
        .catch((error) => {
          console.log("T.T Error en el servidor");
          console.log(error);
        });*/
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
                <h1 align="center">Monitoreo de la memoria</h1>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <Deposits title={"Total de memoria"} fact={data.total} value={0} dimensional={"MB"}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <Deposits title={"Memoria en uso"} fact={data.consumida} value={1} dimensional={"MB"}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <Deposits title={"Porcentaje de memoria en uso"} fact={data.porcentaje} value={2} dimensional={"%"}/>
              </Paper>
            </Grid>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaperChart}>
                <Chart total={data.total} value={data.porcentaje} time={seconds}/>
              </Paper>
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