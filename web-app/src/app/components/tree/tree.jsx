import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles, } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

import Copyright from '../navbar/copyright';
import { treeData, } from '../../services/server'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  rootTree: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
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
    height: 400,
  },
  fixedHeightChart: {
    height: 433,
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const data = [
    { id: 56, parentId: 62 },
    { id: 81, parentId: 80 },
    { id: 74, parentId: null },
    { id: 76, parentId: 80 },
    { id: 63, parentId: 62 },
    { id: 80, parentId: 86 },
    { id: 87, parentId: 86 },
    { id: 62, parentId: 74 },
    { id: 86, parentId: 74 },
  ];

  

export default function TreeProcess() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const renderTree = () =>{}

  const [dataCard, setData] = useState({
    registered: 50,
    running: 50,
    sleeping: 50,
    stopped: 50,
    zombie: 50,
    data: [],
  });
  const [dataTable, setSeconds] = useState([]);

  useEffect(() => {
    /*const interval = setInterval(() => {
      //setSeconds(seconds => seconds + 3);
      setData(processData());
      /*memoryData()
        .then((res) => {
          console.log("Datos ", res);
          setData(res.data);
        })
        .catch((error) => {
          console.log("T.T Error en el servidor");
          console.log(error);
        //});*//*
    }, 3000)
    return () => clearInterval(interval);*/
  }, []);
    //*/
  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>  
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} >
              <Paper className={classes.paperTitle} >
                <h1 align="center">Árbol de Procesos</h1>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                <TreeView
                    className={classes.rootTree}
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    expanded={expanded}
                    selected={selected}
                    onNodeToggle={handleToggle}
                    onNodeSelect={handleSelect}
                    >
                    <TreeItem nodeId="1" label="amazon-ssm-agen">
                        <TreeItem nodeId="2" label="dockerd" />
                        <TreeItem nodeId="3" label="sshd" />
                        <TreeItem nodeId="4" label="loop4" />
                    </TreeItem>
                    <TreeItem nodeId="5" label="bash">
                        <TreeItem nodeId="6" label="sshd">
                        <TreeItem nodeId="7" label="sft-server">
                            <TreeItem nodeId="8" label="sshd" />
                            <TreeItem nodeId="9" label="sd-pam" />
                        </TreeItem>
                        </TreeItem>
                    </TreeItem>
                </TreeView>
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