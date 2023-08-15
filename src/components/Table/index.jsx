import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, TableCell } from './styles'; // Importe os componentes estilizados

export function TableWork() {
  const [datas, setDatas] = useState([]);
  const startDate = '09/08/2023 00:00:00'; // Data de início no formato "DD/MM/YYYY HH:mm:ss"
  const endDate = '11/08/2023 23:59:59'; // Data de fim no formato "DD/MM/YYYY HH:mm:ss"

  useEffect(() => {
    axios
      .get('http://localhost:3333/data/machine1', {
        params: {
          start: startDate,
          end: endDate,
        },
      })
      .then(response => {
        setDatas(response.data.datas);
      })
      .catch(error => {
        console.error('Erro ao buscar dados do backend:', error);
      });
  }, []);

  return (
    <Container>
      <table>
        <div className="table-container">
          <thead>
            <tr>
              <th>Date</th>
              <th>Working</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            {datas.map(item => (
              <tr key={item.timestamp}>
                <TableCell>{item.timestamp}</TableCell>
                <TableCell className={item.working ? 'working' : 'not-working'}>
                  {item.working ? 'Yes' : 'No'}
                </TableCell>
                <TableCell className={item.available ? 'available' : 'not-available'}>
                  {item.available ? 'Yes' : 'No'}
                </TableCell>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
    </Container>
  );
}
