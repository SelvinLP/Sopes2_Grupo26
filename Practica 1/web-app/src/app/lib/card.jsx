import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './title';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookie, faCookieBite, faFire, faDragon, faBug, faFighterJet, faMoon, faBiohazard  } from "@fortawesome/free-solid-svg-icons";

function SelectIcon(props){
    switch(props.value){
        case 0:
          return <FontAwesomeIcon icon={faCookie} style={{ color: "6a4c93" }} size="6x"/>;
        case 1:
          return <FontAwesomeIcon icon={faCookieBite} style={{ color: "ffca3a" }} size="6x"/>;
        case 2:
          return <FontAwesomeIcon icon={faFire} style={{ color: "ff595e" }} size="6x"/>;
        case 3:
          return <FontAwesomeIcon icon={faDragon} style={{ color: "ffca3a" }} size="5x"/>;
        case 4:
          return <FontAwesomeIcon icon={faFighterJet} style={{ color: "8ac926" }} size="5x"/>;
        case 5:
          return <FontAwesomeIcon icon={faMoon} style={{ color: "6a4c93" }} size="5x"/>;
        case 6:
          return <FontAwesomeIcon icon={faBug} style={{ color: "1982c4" }} size="5x"/>;
        default:
            return <FontAwesomeIcon icon={faBiohazard} style={{ color: "ff595e " }} size="5x"/>;
    }
}

export default function Deposits(props) {
  const [valor, setValor] = useState(0);

  useEffect(()=>{
    setValor(props.value);
  }, [props.value]);
  return (
    <React.Fragment >
      <div align="center">
        <Title>{props.title}</Title>
        <Typography component="p" variant="h4">
            {props.fact} {props.dimensional}
        </Typography>
        <SelectIcon value={valor} />
      </div>
    </React.Fragment>
  );
}