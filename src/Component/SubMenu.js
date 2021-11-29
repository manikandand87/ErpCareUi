import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import InnerMenu from './InnerMenu';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #1a83ff;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

// const DropdownLink = styled(Link)`
//   background: #414757;
//   height: 60px;
//   padding-left: 2rem;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   color: #f5f5f5;
//   font-size: 18px;

//   &:hover {
//     background: #632ce4;
//     cursor: pointer;
//   }
// `;

const DropdownLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding:  20px 20px 20px 2rem;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #632ce4;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const [innernav, setInnernav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);
    const showInnernav = () => setInnernav(!innernav);

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </SidebarLink>
            {subnav &&
                item.subNav.map((item1, index1) => {
                    return (
                        <>
                            <DropdownLink to={item1.path} key={index1} onClick={item1.innerMenu && showInnernav}>
                                <div>
                                    {item1.icon}
                                    <SidebarLabel>{item1.title}</SidebarLabel>
                                </div>
                                <div>
                                    {item1.innerMenu && innernav
                                        ? item1.iconOpened
                                        : item1.innerMenu
                                            ? item1.iconClosed
                                            : null}
                                </div>
                            </DropdownLink>
                            {innernav && item1.innerMenu &&
                                item1.innerMenu.map((item, index) => {
                                    return <InnerMenu item={item} key={index} />;
                                })

                            }
                        </>
                    );

                })}


        </>
    );
};

export default SubMenu;