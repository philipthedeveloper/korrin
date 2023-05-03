import React from "react";
import styled from "styled-components";

const TeamCard = ({ name, role, imgUrl }) => {
  return (
    <CardContainer>
      <ProfileImg src={imgUrl} />
      <Name>{name}</Name>
      <Role>{role}</Role>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 33%;
  flex-shrink: 1;
  gap: 1rem;
`;
const ProfileImg = styled.img`
  width: 90%;
  max-width: 250px;
`;
const Name = styled.h3``;
const Role = styled.p`
  font-size: 0.9rem;
`;

export default TeamCard;
