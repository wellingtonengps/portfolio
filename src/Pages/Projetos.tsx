import React from 'react';
import '../App.css';
import styled from "styled-components";


const Section = styled.section`  
  background-color: whitesmoke;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`


const Title = styled.p`
    color: whitesmoke;
    font-family: "Arial",sans-serif;
    font-size: 24px;
    margin: 0px 0px 60px 0px;
`
function Projetos() {

    return (
       <Section>
           <Title>oi</Title>
       </Section>
    );
}

export default Projetos;
