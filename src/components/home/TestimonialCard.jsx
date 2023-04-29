import React from "react";
import styled from "styled-components";

const TestimonialCard = ({ imgUrl, title, role, testimony }) => {
  return (
    <CardContainer>
      <CardHeader>
        <CardImage src={imgUrl} />
        <CardDetails>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderRole>{role}</HeaderRole>
        </CardDetails>
      </CardHeader>
      <Dots />
      <Testimony>&quot;{testimony}&quot;</Testimony>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  min-height: 300px;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  background-color: #d9d9d9;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
`;
const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  align-items: center;
`;
const CardImage = styled.img`
  //   width: 70px;
`;
const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const HeaderTitle = styled.h3`
  color: #5451ef;
  font-size: 1.5rem;
`;
const HeaderRole = styled.p`
  font-size: 0.9rem;
`;
const Testimony = styled.p`
  text-align: center;
  font-size: 0.9rem;
`;

const Dots = () => {
  return (
    <div style={{ display: "flex", gap: "0.2rem" }}>
      <Span background={"#358319"} />
      <Span background={"#FF0000"} />
      <Span background={"#E85110"} />
    </div>
  );
};

const Span = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.background};
`;

export default TestimonialCard;
