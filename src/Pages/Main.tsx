import React from 'react';
import picture from '../picture.png';
import '../App.css';
import styled from "styled-components";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

import IconLink from "../Components/IconLink";

const Title = styled.p`
    color: whitesmoke;
    font-family: "Arial Black",sans-serif;
    font-size: 26px;
    margin-top: 39px;
    margin-bottom: 4px;
`


const Subtitle = styled.p`
    color: whitesmoke;
    font-family: "Arial",sans-serif;
    font-size: 24px;
    margin: 0px 0px 60px 0px;
`

const Header = styled.header`  
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const WrapperLinks = styled.div`
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

function Main() {

    const handleButtonClick = () => {
        console.log('Button clicked!');
        // Add your button click logic here
    };


  return (
    <div className="App">
      <Header>
        <img src={picture} className="picture" alt="picture" height={200}/>
        <Title>Wellington P. Silva</Title>
        <Subtitle>Dev & Design</Subtitle>
          <WrapperLinks>
              <IconLink icon={FaLinkedin} href="https://www.linkedin.com/in/wellingtonengps/" target="" rel="noopener noreferrer" />
              <IconLink icon={FaGithub} href="https://github.com/wellingtonengps" target="" rel="noopener noreferrer" />
              <IconLink icon={FaBehance} href="https://www.behance.net/wellingpereira18" target="" rel="noopener noreferrer" />
              <IconLink icon={FaDribbble} href="https://dribbble.com/wellingtonengps" target="" rel="noopener noreferrer" />
          </WrapperLinks>
      </Header>
    </div>
  );
}

export default Main;
