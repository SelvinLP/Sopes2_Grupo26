import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles, } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

import Copyright from '../navbar/copyright';
import { treeData, } from '../../services/server'
import UpdateIcon from '@material-ui/icons/Update';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  rootTree: {
    height: 110,
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

const dataLoading = {
    id: 'root',
    name: 'Parent',
    children: [
      {
        id: '1',
        name: 'Loading...',
      },
      {
        id: '3',
        name: 'Process...',
        children: [
          {
            id: '4',
            name: 'Child...',
          },
        ],
      },
    ],
  };

function crearArbol(data){
    const idMapping = data.reduce((acc, el, i) => {
        acc[el.id] = i;
        return acc;
    }, {});
      
    let root;
    data.forEach(el => {
      // nodo raíz
      if (el.father === null) {
        root = el;
        return;
      }
      // nodo principal
      const parentEl = data[idMapping[el.father]];
      // nodos secundarios
      parentEl.children = [...(parentEl.children || []), el];
    });

    return root;
} 

export default function TreeProcess() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [tree, setTree] = useState(dataLoading);

  const updateData = () => {
    setTree(crearArbol(treeData()));
  }

  const renderTree = (nodes) => (
    <TreeItem key={`${nodes.id}`} nodeId={`${nodes.id}`} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null }
    </TreeItem>
  );

  useEffect(() => {
    updateData();
  }, []);
  
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
            <Grid item align="center">
              <IconButton onClick={updateData} aria-label="add an update" color="primary">
                <UpdateIcon fontSize="large" />
              </IconButton>
            </Grid>
            
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                <TreeView
                    className={classes.rootTree}
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpanded={['root']}
                    defaultExpandIcon={<ChevronRightIcon />}    
                >   
                    {renderTree(tree)}
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