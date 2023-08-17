import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, TableCell } from './styles'; 
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

export function WorkHours({ filter }) {
  const [datas, setDatas] = useState([]);
  const { startDate, endDate, selectedMachine } = filter;

  useEffect(() => {
    console.log(selectedMachine)
    if (startDate && endDate && selectedMachine) {
      axios
      .get(`http://localhost:3333/data/${selectedMachine}`, {
        params: {
          start: startDate,
          end: endDate,
        },
      })
      .then(response => {
        setDatas(response.data);
        console.log(response.data)
        })
        .catch(error => {
          console.error('Erro ao buscar dados do backend:', error);
        });
    }
  }, [filter]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <PieChart width={400} height={400}>
      <Pie data={datas} dataKey={datas.working} nameKey="Working" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
      <Pie data={datas} dataKey={datas.available} nameKey="available" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
      <Tooltip />
      <Legend verticalAlign="bottom" height={36} />
    </PieChart>
  );
}
