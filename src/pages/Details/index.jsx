import {Container, Content} from "./styles"

import { Header } from "../../components/Header"
import { BackendDataChart } from "../../components/Graphic"


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
            <BackendDataChart/>
          </div>


        </Content>
      </main>



    </Container>
  )
}