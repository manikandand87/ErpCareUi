import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLabel = styled.span`
  margin-left: 2px;
`;
const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 4rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  justify-content: space-between;
  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

const InnerMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <DropdownLink to={item.path}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
            </DropdownLink>
        </>
    );
};

export default InnerMenu;