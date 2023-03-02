import React from "react";
import styled from "styled-components";

//Main Contact Styling
const ContactContent = styled.div`
    background-color: white;
    box-shadow: 0 3px 7px 0 rgb(0 0 0 / 35%);
    width: 60%;
    padding: 3%;
    margin: 10% auto 10% auto;
    animation: fadeInAnimation ease 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;


    @keyframes fadeInAnimation {
        0% {
            opacity: 0;
            transform: translateX(20px);
        }
        100% {
            opacity: 1;
            transform: translateX(0px);
        }
    }
`;

//Contact Component
export default function Contact(){
    return (
        <ContactContent>

        </ContactContent>
    )
}