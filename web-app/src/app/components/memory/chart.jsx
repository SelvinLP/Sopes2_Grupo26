import React, { useEffect, useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, Label, ResponsiveContainer, Area } from 'recharts';

function createData(time, amount) {
  return { time, amount };
}

export default function Chart(props) {
  const theme = useTheme();
  const [data, setData] = useState([]);

  useEffect(() => {
    if(data.length === 20 ){
      data.shift();
      setData(data);
    }
    setData([...data, createData(props.time, props.value)]);
  }, [props.time]);

  return (
    <React.Fragment>
      Uso de memoria
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 10,
            bottom: 0,
            left: 20,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Porcentaje
            </Label>
          </YAxis>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="amount" stroke="#8884d8" fillOpacity={1} fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}