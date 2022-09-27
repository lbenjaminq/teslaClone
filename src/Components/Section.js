import React from "react";
import styled from "styled-components";
import Arrow from "../images/down-arrow.svg";

const Section = ({ img, title, subtitle, leftButton, rightButton }) => {
  return (
    <Wrap img={img}>
      <ItemText>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftButton}</LeftButton>
          {rightButton && <RightButton>{rightButton}</RightButton>}
        </ButtonGroup>
        <DownArrow src={Arrow} />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  h1 {
    color: #171a20;
    font-size: 40px;
    line-height: 48px;
  }
  p {
    font-size: 14px;
    line-height: 20px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.9);
  height: 40px;
  width: 266px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: rgba(255, 255, 255, 0.7);
  color: #393c41;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
  text-align: center;
`;
