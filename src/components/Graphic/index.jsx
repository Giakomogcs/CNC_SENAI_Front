import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {Container} from "./styles"

export function BackendDataChart() {
  const [datas, setDatas] = useState([]);
  const startDate = '10/08/2023 11:00:00'; // Data de início no formato "DD/MM/YYYY HH:mm:ss"
  const endDate = '11/08/2023 23:59:59'; // Data de fim no formato "DD/MM/YYYY HH:mm:ss"

  
  useEffect(() => {
    // Formatar as datas para o formato aceito pelo backend (por exemplo, ISO 8601)
    const formattedStartDate = new Date(startDate).toISOString();
    const formattedEndDate = new Date(endDate).toISOString();
    
    // Fazer a solicitação GET para a sua API do backend
    axios.get('http://localhost:3333/data/machine1', {
      params: {
        start: startDate,
        end: endDate
      }
    })
    .then(response => {
      setDatas(response.data.datas); // Armazenar os dados da resposta no estado
      console.log(datas)
      })
      .catch(error => {
        console.error('Erro ao buscar dados do backend:', error);
      });
  }, []);

  return (
    <Container>
      <BarChart width={600} height={400} data={datas} responsive>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis ticks={[0, 1]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="working" fill="#1a890b" />
        <Bar dataKey="available" fill="#e5db16" />
      </BarChart>
    </Container>
  );
  
};
