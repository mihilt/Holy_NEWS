import React from 'react';

import styled from 'styled-components';

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';

import 'react-pro-sidebar/dist/css/styles.css';

import './SideBarStyles.scss';

import '../../tailwind/tailwind.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

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

const countries = [
    {
        name : 'kr',
        text : '한국'
    },
    {
        name : 'us',
        text : '미국'
    },
    {
        name : 'jp',
        text : '일본'
    },
    {
        name : 'ru',
        text : '러시아'
    }
];



const JustSpace = styled.div`
margin-left: 250px;

@media (max-width: 640px) { 
    display:none;
}	
`;

const SidebarDiv = styled.div`
position: relative;
transition: all .6s ease-in-out;

@media (max-width: 640px) { 
    transform: translateX(-250px);
    transition: all .6s ease-in-out;
}	
`;

const MenuIcon = styled.div`
position: fixed;
display: flex;
top: 5px;
left: 10px;
align-items: center;
justify-content: center;
background-color: #e7e7e7;
border-radius: 50%;
z-index: 1;
cursor: pointer;
padding: 12px;

@media (min-width: 640px) { 
    visibility: hidden;
}	
`;

const MenuClose = styled.div`
position: absolute;
visibility: visible;
top: 8px;
right: 12px;
cursor: pointer;
font-size: 20px;
color: #ddd;

@media (min-width: 640px) { 
    visibility: hidden;
}	
`;



const Sidebar = ({ selectCategory, category, country, selectCountry }) => {

    return(
        <>  
            <MenuIcon>
                <FontAwesomeIcon icon={ faBars } />
            </MenuIcon>

            <SidebarDiv>
                <ProSidebar id = "toMakeFixed">
                    <MenuClose>
                        <FontAwesomeIcon icon={ faTimes } />
                    </MenuClose>
                    <SidebarHeader>
                        <p className = "text-center m-5 text-2xl">
                            <a href="/">
                                Holy NEWS
                            </a>
                        </p>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <SubMenu defaultOpen="true" title="카테고리">
                                {categories.map(c => (
                                    <MenuItem className=""
                                        key={c.name}
                                        active={category === c.name}
                                        onClick={() => selectCategory(c.name)}>
                                        {c.text}
                                    </MenuItem>
                                ))}
                            </SubMenu>
                            <SubMenu title="언어">
                                {countries.map(c => (
                                    <MenuItem className=""
                                        key={c.name}
                                        active={country === c.name}
                                        onClick={() => selectCountry(c.name)}>
                                        {c.text}
                                    </MenuItem>
                                ))}
                            </SubMenu>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        
                    </SidebarFooter>
                </ProSidebar>
            </SidebarDiv>

            <JustSpace></JustSpace>
        </>
    );
};


export default Sidebar;
