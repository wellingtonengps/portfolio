// IconLink.js
import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: whitesmoke;
  transition: color 0.3s ease;

  &:hover {
    color: #6080de;
  }
`;

// @ts-ignore
const IconLink = ({ icon: Icon, href, target, rel }) => {
    return (
        <Link href={href} target={target} rel={rel}>
            <Icon size={28} />
        </Link>
    );
};

export default IconLink;
