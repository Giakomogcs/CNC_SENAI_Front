import styled from 'styled-components'

export const Container = styled.div`
    
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main{
        grid-area: content;
        overflow-y: auto;
        padding: 35px;
        
        font-family: 'Inter', sans-serif;
    }
`;
     

export const Content = styled.div`
    
       
`

