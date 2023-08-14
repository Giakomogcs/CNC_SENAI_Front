import { Container } from "./styles";
import {Input} from "../../components/Input"; 

export function Header() {
  const optionsArray = [
    { value: 'opcao1', label: 'Opção 1' },
    { value: 'opcao2', label: 'Opção 2' },
    { value: 'opcao3', label: 'Opção 3' },
  ];

  return (
    <Container>
      <img src="/images/SENAI_Logo.png" alt="Logo Istituto SENAI de Tecnologia" />
      
      <Input options={optionsArray} />
    </Container>
  );
}
