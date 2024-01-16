import React from 'react';
import styled from 'styled-components';
//import SideBarItem from "./SideBarItem";
import { IoMdClose } from "react-icons/io";


interface ContainerProps {
    sidebar: boolean;
}

const Container = styled.div<ContainerProps>`
    background-color: #171923;
    position: fixed;
    height: 100%;
    top: 0px;
    right: 0px;
    width: 300px;
    right: ${props => props.sidebar ? '0' : '100%'};
    animation: showSidebar .4s;

    > svg {
        position: fixed;
        color: white;
        width: 30px;
        height: 30px;
        margin-top: 32px;
        margin-left: 32px;
        cursor: pointer;
    }

    @keyframes showSidebar {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 300px;
        }
    }
`;

const Content = styled.div`
  margin-top: 100px;
`;

// @ts-ignore
const SideBar = ({children, active}) => {

    const closeSideBar = () => {
        active(false)
    }


    return (
        <Container sidebar={active}>
            <IoMdClose onClick={closeSideBar}  color={"#FFFFFF"} size={30}/>
            <Content>
                {children}
            </Content>
        </Container>
    );
};

export default SideBar;