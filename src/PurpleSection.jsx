import React from "react";
import { styled } from "styled-components";

const PurpleSection = () => {
    return <Wrapper> </Wrapper>;
};

const Wrapper = styled.div`
    width: 450px;
    height: 90vh;
    border-radius: 0 0 500px 500px;
    background-color: red;
    background-image: linear-gradient(var(--gradient-1), var(--gradient-2));
    position: absolute;
    top: 0;
    left: -100px;

    @media only screen and (min-width: 1500px) {
        width: 600px;
    }
    @media only screen and (max-width: 940px) {
        left: -200px;
    }
    @media only screen and (max-width: 704px) {
        width: 100%;
        left: -50%;
        height: 75vh;
    }
`;
export default PurpleSection;
