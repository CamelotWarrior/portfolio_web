import React, { useState, useRef } from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { useOnClickOutside } from "./hooks/hooks";
import Burger from './Burger';


const StyledNavbar = styled.nav<{ open: boolean}>`
    top: 0;
    left: 0;
    height: 100vh;
    width: 16.8vw;
    position: fixed;
    background-color: #030F20;
    z-index: 1;

    padding: 10rem 0;
    flex-direction: column;
    display: flex;

    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) =>
        (open ? "translateX(0)" :"translateX(-100%)")};

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const StyledLink = styled(Link)`
    padding: 0 3.5rem 0.8rem;
    font-size: 2rem;
    color: white;
    text-decoration: none;
    font-weight: bold;

    :hover {
        transition: color 0.3s ease-in-out;
        color: #0FD4C6;
        cursor: pointer;
    }

    @media (max-width: 600px) {
        text-align: center;
    }
`;

const Menu = () => {
    const [open, setOpen] = useState<boolean>(false);
    const node = useRef<HTMLDivElement>(null);
    const close = () => setOpen(false);

    useOnClickOutside(node, () => setOpen(false));

    return (
        <div ref={node}>
            <StyledNavbar open={open}>
                <StyledLink onClick={() => close()} to="/">Home</StyledLink>
                <StyledLink onClick={() => close()} to="/about">About</StyledLink>
                <StyledLink onClick={() => close()} to="/languages">Languages</StyledLink>
                <StyledLink onClick={() => close()} to="/contact">Contact</StyledLink>
            </StyledNavbar>
            <Burger open={open} setOpen={setOpen} />
        </div>
    )
}

export default Menu;