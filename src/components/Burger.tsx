import styled from "styled-components";


//Hamburger Button Style
const StyledBurger = styled.button<{ open: boolean }>`
    position: fixed;
    left: 3vw;
    top: 3vw;
    width: 2rem;
    height: 2rem;
    padding: 0;
    background: transparent;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: none;
    cursor: pointer;
    outline: none;
    z-index: 1;

    div {
        position: relative;
        width: 2rem;
        height: 0.25rem;
        border-radius: 10px;
        background-color: #0FD4C6;
        transition: all 0.3s linear;
        transform-origin: 1px;

        @media (max-width: 600px) {
            left: ${({open}) => (open ? "initial" : "3vw")};
            right: ${({open}) => (open ? "2vw" : "initial")};
        }

        :first-child {
            transform: ${({open}) =>
        (open ? "rotate(45deg)" : "rotate(0)")};
        }

        :nth-child(2) {
            opacity: ${({open}) => (open ? "0" : "1")};
            transform: ${({open}) => 
        (open ? "translateX(20px)" : "translateX(0)")};
        }

        :nth-child(3) {
            transform: ${({open}) =>
        (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    }
`;

//Setting Props
export type Props = {
    open: boolean;
    setOpen: (v: boolean) => void;
};

//Burger Component
const Burger = (props: Props) => (
    <StyledBurger
    open={props.open}
    onClick={() => props.setOpen(!props.open)}>
        <div/>
        <div/>
        <div/>
    </StyledBurger>
);

export default Burger;