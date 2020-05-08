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
`

const Sidebar = ({ selectCategory, category, country, selectCountry }) => {
    return(
        <>
            <ProSidebar id = "toMakeFixed">
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
            <JustSpace></JustSpace>
        </>
    );
};


export default Sidebar;
