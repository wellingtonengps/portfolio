// IconButton.js
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

// @ts-ignore
const IconButton = ({ icon: Icon, onClick }) => {
    return (
        <Button onClick={onClick}>
            <Icon size={20} />
        </Button>
    );
};

export default IconButton;