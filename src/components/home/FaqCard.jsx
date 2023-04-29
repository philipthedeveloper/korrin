import React from "react";
import styled from "styled-components";

const FaqCard = ({ question, answer, action, reverse }) => {
  return (
    <Button onClick={() => action(answer, question)} reverse={reverse}>
      {question}
      <ImageIcon src={require("../../assets/imgs/right-arrow.png")} />
    </Button>
  );
};

const Button = styled.button`
  text-align: left;
  padding: 0.7rem 1rem;
  cursor: pointer;
  outline: none;
  border: none;
  background: none;
  border-radius: 0.5rem;
  transition: 0.5s ease;
  font-family: inherit;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  justify-content: space-between;
  width: 100%;

  &:hover {
    background-color: #d9d9d9;
  }

  img {
    transform: ${(props) => (props.reverse ? "rotate(180deg)" : "")};
  }
`;

const ImageIcon = styled.img``;
export default FaqCard;
