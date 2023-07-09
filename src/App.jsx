import React from "react";
import AboutUs from "./AboutUs";
import PurpleSection from "./PurpleSection";
import { styled } from "styled-components";
import Phone from "./Phone";

const App = () => {
    return (
        <Wrapper>
            <PurpleSection />
            <Phone />

            <AboutUs />
            {/* Text */}
        </Wrapper>
    );
};
const Wrapper = styled.div`
    position: relative;
    min-height: 100vh;
`;
export default App;
