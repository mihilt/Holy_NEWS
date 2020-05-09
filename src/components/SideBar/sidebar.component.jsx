import React, { useState } from "react";

import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

import "react-pro-sidebar/dist/css/styles.css";

import "./sidebarStyles.scss";

import "../../tailwind/tailwind.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/fontawesome-free-brands";

import { JustSpace, SidebarDiv, MenuIcon, MenuClose } from "./sidebar.styles";

const categories = [
    {
        name: "all",
        text: "전체보기",
    },
    {
        name: "business",
        text: "비지니스",
    },
    {
        name: "entertainment",
        text: "엔터테인먼트",
    },
    {
        name: "health",
        text: "건강",
    },
    {
        name: "science",
        text: "과학",
    },
    {
        name: "sports",
        text: "스포츠",
    },
    {
        name: "technology",
        text: "기술",
    },
];

const countries = [
    {
        name: "kr",
        text: "한국",
    },
    {
        name: "us",
        text: "미국",
    },
    {
        name: "jp",
        text: "일본",
    },
    {
        name: "ru",
        text: "러시아",
    },
];

const Sidebar = ({ selectCategory, category, country, selectCountry }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <MenuIcon
                onClick={() =>
                    toggle === true ? setToggle(false) : setToggle(true)
                }
            >
                <FontAwesomeIcon icon={faBars} />
            </MenuIcon>

            <SidebarDiv toggle={toggle}>
                <ProSidebar id="toMakeFixed">
                    <MenuClose
                        onClick={() =>
                            toggle === true ? setToggle(false) : setToggle(true)
                        }
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </MenuClose>
                    <SidebarHeader>
                        <p className="text-center m-5 text-2xl">
                            <a href="/">Holy NEWS</a>
                        </p>
                    </SidebarHeader>
                    <SidebarContent>
                        <div className="my-2 relative mx-2 text-gray-600">
                            <input
                                style={{ width: "235px" }}
                                className="border-2 border-gray-300 bg-white h-10 px-3 pr-8 rounded-lg text-sm focus:outline-none"
                                name="search"
                                placeholder="검색"
                            />
                            <button
                                type="submit"
                                className="absolute right-0 top-0 mt-2 mr-3"
                            >
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                        <Menu iconShape="square">
                            <SubMenu defaultOpen="true" title="카테고리">
                                {categories.map((c) => (
                                    <MenuItem
                                        className=""
                                        key={c.name}
                                        active={category === c.name}
                                        onClick={() => selectCategory(c.name)}
                                    >
                                        {c.text}
                                    </MenuItem>
                                ))}
                            </SubMenu>
                            <SubMenu title="언어">
                                {countries.map((c) => (
                                    <MenuItem
                                        className=""
                                        key={c.name}
                                        active={country === c.name}
                                        onClick={() => selectCountry(c.name)}
                                    >
                                        {c.text}
                                    </MenuItem>
                                ))}
                            </SubMenu>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <div
                            className="text-center py-4 hover:text-red-600 hover: cursor-pointer"
                            onClick={() => {
                                window.location.href =
                                    "https://github.com/mihilt";
                            }}
                        >
                            <FontAwesomeIcon
                                className="text-2xl"
                                icon={faGithub}
                            />
                        </div>
                    </SidebarFooter>
                </ProSidebar>
            </SidebarDiv>

            <JustSpace></JustSpace>
        </>
    );
};

export default Sidebar;
