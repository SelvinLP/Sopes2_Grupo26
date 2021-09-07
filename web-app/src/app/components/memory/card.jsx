import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookie, faCookieBite, faFire  } from "@fortawesome/free-solid-svg-icons";

function Title(props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
    {props.children}
    </Typography>
  );
}

function SelectIcon(props){
    switch(props.value){
        case 0:
            return <FontAwesomeIcon icon={faCookie} style={{ color: "6a4c93" }} size="6x"/>;
        case 1:
            return <FontAwesomeIcon icon={faCookieBite} style={{ color: "ffca3a" }} size="6x"/>;
        default:
            return <FontAwesomeIcon icon={faFire} style={{ color: "ff595e" }} size="6x"/>;
    }
}

Title.propTypes = {
    children: PropTypes.node,
};

export default function Deposits(props) {
  const [valor, setValor] = useState(0);

  useEffect(()=>{
    setValor(props.value);
  }, []);
  return (
    <React.Fragment >
      <div align="center">
        <Title>{props.title}</Title>
        <Typography component="p" variant="h4">
            {props.fact} MB
        </Typography>
        <SelectIcon value={valor} />
      </div>
    </React.Fragment>
  );
}