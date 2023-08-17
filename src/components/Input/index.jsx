
import { Container, Option } from "./styles";

export function Input({machines}){
  console.log(`options: ${machines}`)
  return(
    <Container>
      {machines.map((machine) => (
        <Option key={machine.id} value={machine.name}>
          {machine.name}
        </Option>
      ))}
    </Container>
  )
}