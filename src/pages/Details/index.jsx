import {Container, Content} from "./styles"
import React, { useEffect, useState } from 'react';
import { Header } from "../../components/Header"
import { TableWork } from "../../components/Table"
import { WorkHours } from "../../components/WorkHours"


export function Details(){

  const [filter, setFilter] = useState({
    startDate: null,
    endDate: null,
    selectedMachine: '',
  });

  const handleFilterChange = (newFilter) => {
    console.log("filtrou")
    setFilter(newFilter);
  };
  
  return(
    <Container>
      <Header onFilterChange={handleFilterChange}/>

      <main>
        <Content>
          <div className="Title">
            <h1>Disponibilidade CNC SENAI</h1>
          </div>

          <div className="Graphic">
            <TableWork filter={filter}/>
            <WorkHours filter={filter}/>
          </div>


        </Content>
      </main>



    </Container>
  )
}