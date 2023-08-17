import { Container } from "./styles";
import {Input} from "../../components/Input"; 
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export function Header() {
  const [machines, setMachines] = useState([]);

  const optionsArray = [
    { value: 'opcao1', label: 'Opção 1' },
    { value: 'opcao2', label: 'Opção 2' },
    { value: 'opcao3', label: 'Opção 3' },
  ];

  useEffect(() => {
    axios
      .get('http://localhost:3333/machine')
      .then(response => {
        setMachines(response.data.machines);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados do backend:', error);
      });
  }, []);

  return (
    <Container>
      <img src="/images/SENAI_Logo.png" alt="Logo Istituto SENAI de Tecnologia" />
      
      <Input machines={machines} />
    </Container>
  );
}
