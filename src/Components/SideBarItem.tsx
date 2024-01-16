import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #1A202C; 
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    color: #6080de;
  }
`;
// @ts-ignore
const SidebarItem = ({ Icon, Text, Ref }) => {
    return (
        <Container onClick={() => Ref.current.scrollIntoView({ behavior: 'smooth' })}>
            <Icon />
            {Text}
        </Container>
    )
}

export default SidebarItem