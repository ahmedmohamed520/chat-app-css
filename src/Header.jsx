import React from "react";
import { styled } from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";

const Header = () => {
    return (
        <Wrapper role="phone header">
            {/* white part */}
            <div className="white-section"></div>
            <FaChevronLeft className="icon" color="#fff" />
            <div className="header-img">
                <img src="images/avatar.jpg" alt="avatar    " />
            </div>
            <div className="user-info">
                <h3 className="header-title">Samuel Green </h3>
                <p className="header-text">Available to walk</p>
            </div>
            <BsThreeDotsVertical className="header-dots icon" color="#fff" />
        </Wrapper>
    );
};
const Wrapper = styled.div`
    position: absolute;
    top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-image: linear-gradient(to right, var(--gradient-2), var(--gradient-1));
    width: 224px;
    border-radius: 20px 20px 0 0;
    padding: 1.75rem 0.75rem 0.75rem;
    overflow: hidden;

    .white-section {
        width: 120px;
        height: 25px;
        background-color: #fff;
        border-radius: 200px;
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
    }

    .header-img {
        border-radius: 50%;
        border: 1px solid #fff;
        width: 20px;
        height: 20px;
    }
    .header-img img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .user-info {
        font-size: 0.5rem;
    }
    .header-title {
        color: #fff;
        margin-bottom: 3px;
        font-size: 0.6rem;
        font-weight: 500;
    }
    .header-text {
        color: var(--clr-gray-2);
        font-size: 0.45rem;
    }
    .header-dots {
        margin-left: auto;
    }
    .icon {
        cursor: pointer;
        font-size: 8px;
    }
    @media only screen and (min-width: 1500px) {
        width: 254px;
    }
`;

export default Header;
