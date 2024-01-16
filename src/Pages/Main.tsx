import React, {useRef, useState} from 'react';
import picture from '../picture.png';
import '../App.css';
import styled from "styled-components";

import {FaHome, FaLinkedin} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { RiFolder5Fill } from "react-icons/ri";
import { RiAccountCircleFill } from "react-icons/ri";



import IconLink from "../Components/IconLink";
import SideBar from "../Components/SideBar";
import SideBarItem from "../Components/SideBarItem";

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
    //background-color: indianred;
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

const WrapperSections = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    position: absolute;
    bottom: 60px;
    gap: 40px;
  
   a {
     cursor: pointer;
   }

  a:hover {
    color: #6080de;
  }

    @media only screen and (max-width: 768px) {
      display: none;
    }
`

const Section = styled.section`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 0 60px 0 60px;

    text-align: justify;
    hyphens: auto;
`

const SideBarIcon = styled.div`
    position: fixed;
    cursor: pointer;
    top: 40px;
    right: 50px;
  
    @media only screen and (min-width: 768px) {
        display: none;
    }
  
`

function Main() {

    const resumoRef = useRef<HTMLLinkElement>(null)
    const projetosRef = useRef<HTMLLinkElement>(null)
    const mainRef = useRef<HTMLLinkElement>(null)
    const contatoRef = useRef<HTMLLinkElement>(null)

    const [sideBar, setSideBar] = useState(false)

    const showSideBar = () => setSideBar(!sideBar)

    const scrollParaResumo = () => {
        if (resumoRef.current) {
            resumoRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollParaProjetos = () => {
        if (projetosRef.current) {
            projetosRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollParaContato = () => {
        if (contatoRef.current) {
            contatoRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
    <div className="App">
            <SideBarIcon>
                <IoMdMenu onClick={showSideBar} color={"#6080de"} size={30}/>
            </SideBarIcon>
            {sideBar && <SideBar active={setSideBar}>
                <SideBarItem Icon={RiAccountCircleFill} Text="Resumo" Ref={resumoRef}/>
                <SideBarItem Icon={RiFolder5Fill} Text="Projetos" Ref={projetosRef}/>
                <SideBarItem Icon={RiContactsFill} Text="Contato" Ref={contatoRef}/>
            </SideBar>}
          <section ref={mainRef}>
              <Header>
              <img src={picture} className="picture" alt="picture" height={200}/>
              <Title>Wellington P. Silva</Title>
              <Subtitle>Dev & Design</Subtitle>
              <WrapperLinks>
                  <IconLink icon={FaLinkedin} href="https://www.linkedin.com/in/wellingtonengps/" target=""
                            rel="noopener noreferrer"/>
                  <IconLink icon={FaGithub} href="https://github.com/wellingtonengps" target=""
                            rel="noopener noreferrer"/>
                  <IconLink icon={FaBehance} href="https://www.behance.net/wellingpereira18" target=""
                            rel="noopener noreferrer"/>
                  <IconLink icon={FaDribbble} href="https://dribbble.com/wellingtonengps" target=""
                            rel="noopener noreferrer"/>
              </WrapperLinks>
                  <WrapperSections>
                      <a onClick={scrollParaResumo}>Resumo</a>
                      <a onClick={scrollParaProjetos}>Projetos</a>
                      <a onClick={scrollParaContato}>Contato</a>
                  </WrapperSections>
              </Header>
          </section>
        <Section ref={resumoRef}>
              <Title>Resumo</Title>
            <p>Wellington Pereira Silva é um dedicado estudante de Ciência da Computação, atualmente desempenhando o papel de estagiário de suporte em TI no Hospital Unimed Juiz de Fora. Além de sua atuação nessa área, ele se destaca como desenvolvedor Web e mobile, demonstrando habilidades que transcendem o nível comum de um estagiário, aproximando-se de uma senioridade júnior. Sua expertise abrange não apenas a programação, mas também a área de UX/UI, onde exibe um interesse entusiasmado. Wellington tem uma notável facilidade para desenvolver usabilidade e interfaces, evidenciando sua paixão pela criação de experiências digitais intuitivas e agradáveis.</p>
          </Section>
          <Section ref={projetosRef}>
              <Title>Projetos</Title>
          </Section>
        <Section ref={contatoRef}>
            <Title>Contato</Title>
        </Section>

    </div>
    );
}

export default Main;
