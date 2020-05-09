import styled, { css } from "styled-components";

export const JustSpace = styled.div`
    margin-left: 250px;

    @media (max-width: 640px) {
        display: none;
    }
`;

export const SidebarDiv = styled.div`
    position: relative;
    transition: all 0.6s ease-in-out;
    z-index: 2;

    @media (max-width: 640px) {
        transform: translateX(-250px);

        ${(props) =>
            props.toggle &&
            css`
                transform: translateX(0);
            `};
        transition: all 0.6s ease-in-out;
    }
`;

export const MenuIcon = styled.div`
    position: fixed;
    display: flex;
    top: 5px;
    left: 10px;
    align-items: center;
    justify-content: center;
    background-color: #e7e7e7;
    border-radius: 50%;
    cursor: pointer;
    padding: 12px;
    z-index: 1;

    @media (min-width: 640px) {
        visibility: hidden;
    }
`;

export const MenuClose = styled.div`
    position: absolute;
    visibility: visible;
    top: 8px;
    right: 12px;
    cursor: pointer;
    font-size: 20px;
    color: black;

    @media (min-width: 640px) {
        visibility: hidden;
    }
`;
