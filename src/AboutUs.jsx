import React from "react";
import { styled } from "styled-components";

const AboutUs = () => {
    return (
        <Wrapper role="about us">
            <div className=""></div>
            <div className="text-box">
                <h1 className="heading">Simple booking</h1>
                <p className="text">
                    Stay in touch with our dog walkers through the chat interface. This makes it easy to
                    discuss arrangements and make bookings. Once the walk has been completed you can rate your
                    walker and book again all through the chat.
                </p>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .text-box {
        width: 400px;
    }
    .heading {
        color: var(--clr-purple-2);
        font-weight: 500;
        margin-bottom: 1.5rem;
        font-size: 2rem;
    }
    .text {
        color: var(--clr-gray-3);
        line-height: 1.5;
    }
    @media only screen and (min-width: 1500px) {
        .text-box {
            width: 600px;
        }
        .heading {
            font-size: 3rem;
        }
        .text {
            font-size: 1.2rem;
            line-height: 1.5;
        }
    }
    @media only screen and (max-width: 1200px) {
        .text-box {
            margin-left: 100px;
            padding: 25px;
        }
    }
    @media only screen and (max-width: 704px) {
        grid-template-columns: 1fr;
        top: 105%;
        text-align: center;

        .text-box {
            margin-left: 0;
            width: auto;
            padding: 4rem 1.5rem;
        }
        .heading {
            font-size: 2.8rem;
        }
        .text {
            font-size: 1.2rem;
        }
    }
`;

export default AboutUs;
