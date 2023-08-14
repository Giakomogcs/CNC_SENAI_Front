
import { Container, Option } from "./styles";

export function Input({options , ...rest}){
  return(
    <Container>
      {options.map((option, index) => (
        <Option key={index} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Container>
  )
}