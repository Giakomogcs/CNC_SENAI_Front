import {Container, Content} from "./styles"

import { Header } from "../../components/Header"
import { TableWork } from "../../components/Table"


export function Details(){
  
  return(
    <Container>
      <Header/>

      <main>
        <Content>
          <div className="Title">
            <h1>Disponibilidade CNC SENAI</h1>
          </div>

          <div className="Graphic">
            <TableWork/>
          </div>


        </Content>
      </main>



    </Container>
  )
}