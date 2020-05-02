import React from 'react';

import styled from 'styled-components';

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import './SideBarStyles.scss';

import '../../tailwind/tailwind.css';

const categories = [
    {
        name : 'all',
        text : '전체보기'
    },
    {
        name : 'business',
        text : '비지니스'
    },
    {
        name : 'entertainment',
        text : '엔터테인먼트'
    },
    {
        name : 'health',
        text : '건강'
    },
    {
        name : 'science',
        text : '과학'
    },
    {
        name : 'sports',
        text : '스포츠'
    },
    {
        name : 'technology',
        text : '기술'
    }
];

const JustSpace = styled.div`
margin-left: 250px;
`

const Sidebar = ({ onSelect, category }) => {
    return(
        <>
            <ProSidebar className = "">
                <SidebarHeader>
                    <p className = "text-center m-5 text-2xl">Holy NEWS</p>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <SubMenu defaultOpen="true" title="카테고리">
                            {categories.map(c => (
                                <MenuItem className=""
                                    key={c.name}
                                    active={category === c.name}
                                    onClick={() => onSelect(c.name)}>
                                    {c.text}
                                </MenuItem>
                            ))}
                        </SubMenu>
                        <SubMenu title="언어">
                            <MenuItem>Component</MenuItem>
                            <MenuItem>Component</MenuItem>
                            <MenuItem>Component</MenuItem>
                            <MenuItem>Component</MenuItem>
                            <MenuItem>Component</MenuItem>
                            <MenuItem>Component</MenuItem>
                            <MenuItem>Component</MenuItem>
                            <MenuItem>Component</MenuItem>
                            <MenuItem>Component</MenuItem>
  
                        </SubMenu>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    
                </SidebarFooter>
            </ProSidebar>
            <JustSpace></JustSpace>
        </>
    );
};


export default Sidebar;
