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
  gap: 1rem;
`;
const ProfileImg = styled.img``;
const Name = styled.h3``;
const Role = styled.p`
  font-size: 0.9rem;
`;

export default TeamCard;
