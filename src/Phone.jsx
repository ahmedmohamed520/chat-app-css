import React from "react";
import Header from "./Header";
import { styled } from "styled-components";
import { FaChevronRight } from "react-icons/fa";

const Phone = () => {
    return (
        <Wrapper role="phone">
            {/* Header */}
            <Header />
            <div role="messages" className="phone-container">
                <p className="message message-purple">That sounds great. I'd be happy with that.</p>
                <p className="message message-purple">That sounds great. I'd be happy with that.</p>
                <div className="images">
                    <img src="images/dog-image-1.jpg" alt="dog" />
                    <img src="images/dog-image-2.jpg" alt="dog" />
                    <img src="images/dog-image-3.jpg" alt="dog" />
                </div>
                <p className="message message-black">Here are a few pictures. She's a happy girl</p>
                <p className="message message-black">Can you make it?</p>
                <p className="message message-purple">
                    She looks so happy! The time we discussed works. How long shall I take her out for?
                </p>

                <div className="offer">
                    {/* circle */}
                    <div className="circle"></div>
                    <p className="offer-text">30 minute walk </p>
                    <p className="offer-price">$29</p>
                </div>

                <div className="offer">
                    {/* circle */}
                    <div className="circle"></div>
                    <p className="offer-text">30 minute walk </p>
                    <p className="offer-price">$29</p>
                </div>

                <div className="phone-input">
                    <p className="input-text">Type a message</p>

                    <div className="arrow">
                        <FaChevronRight size="14px" color="#fff" />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    bottom: 12vh;
    padding: 74px 0.5rem 0.5rem;
    background-color: #fff;
    border-radius: 20px;
    width: 240px;
    position: absolute;
    left: 290px;
    box-shadow: 5px 5px 20px var(--clr-gray-2);

    .phone-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: var(--clr-gray-1);
        padding: 0.5rem;
    }

    .message {
        padding: 0.5rem;
        border-radius: 10px 10px 10px 5px;
        font-size: 0.5rem;
        line-height: 1.2;
        margin-bottom: 0.5rem;
        width: 60%;
        box-shadow: 0 0 5px hsl(206, 6%, 79%, 0.5);
    }
    .message-purple {
        color: var(--clr-purple-1);
        background-color: var(--clr-gray-1);
    }
    .images {
        display: flex;
        gap: 0.5rem;

        align-self: flex-end;
        margin-bottom: 0.5rem;
    }
    .images img {
        width: 35px;
        border-radius: 10px;
    }
    .message-black {
        color: var(--clr-gray-4);
        background-color: #fff;
        align-self: flex-end;
    }
    .offer {
        padding: 0.5rem;
        border-radius: 10px 10px 10px 5px;
        background-image: linear-gradient(to right, var(--gradient-1), var(--gradient-2));
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 0.5rem;
        width: 75%;
    }
    .circle {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid var(--clr-gray-1);
    }
    .offer-text {
        color: var(--clr-gray-2);
        font-size: 0.4rem;
    }
    .offer-price {
        font-weight: 700;
        font-size: 0.6rem;
        color: #fff;
        margin-left: auto;
        margin-right: 0.25rem;
    }
    .phone-input {
        padding: 0.25rem;
        width: 100;
        background-color: #fff;
        border-radius: 500px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: 0.5rem;
        color: var(--clr-gray-2);
        font-size: 0.5rem;
        border-radius: 200px;
        box-shadow: 0 0 10px var(--clr-gray-1);
    }
    .input-text {
        margin-left: 1rem;
    }
    .arrow {
        border-radius: 50%;
        background-color: var(--clr-purple-2);
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    @media only screen and (min-width: 1500px) {
        width: 270px;
        left: 420px;
        top: 340px;
        bottom: auto;
    }
    @media only screen and (max-width: 940px) {
        left: 100px;
        bottom: 10vh;
        top: auto;
    }
    @media only screen and (max-width: 704px) {
        bottom: auto;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export default Phone;
