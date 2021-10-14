import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../lib/title';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkull } from "@fortawesome/free-solid-svg-icons";
import { killProcess } from '../../services/server';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function TableProcess(props) {
  const classes = useStyles();

  const [datos, setDatos] = useState(props.dataTable);

  useEffect(()=>{
    let auxData = [];
    for (const key in props.dataTable) {
      const element = props.dataTable[key];
      element.id = key;
      auxData.push(element);
    }
    setDatos(auxData);
  }, [props.dataTable])

  return (
    <React.Fragment>
      <Title>Tabla de procesos</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>PID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Ram</TableCell>
            <TableCell>Task</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datos.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.PID}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.estate}</TableCell>
              <TableCell>{row.ram}</TableCell>
              <TableCell>{row.taskCodesize}</TableCell>
              <TableCell>{row.user}</TableCell>
              <TableCell>
                <IconButton onClick={() => { killProcess(row.PID); }} aria-label="delete" className={classes.margin} size="small">
                  <FontAwesomeIcon icon={faSkull} style={{ color: 'FF6914' }} size="1x" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}