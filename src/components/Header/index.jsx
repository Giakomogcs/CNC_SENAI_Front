import { Container } from "./styles";
import {Input} from "../../components/Input"; 
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Calendar } from "../../components/Calendar"


export function Header() {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3333/machine')
      .then(response => {
        setMachines(response.data.machines);
      })
      .catch(error => {
        console.error('Erro ao buscar dados do backend:', error);
      });
  }, []);

  return (
    <Container>
      <img src="/images/SENAI_Logo.png" alt="Logo Istituto SENAI de Tecnologia" />

      <div>
        <Calendar/>
        <Input machines={machines} />
      </div>
    </Container>
  );
}
