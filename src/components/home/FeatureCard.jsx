import React from "react";
import styled from "styled-components";

const FeatureCard = ({ iconUrl, name, description }) => {
  return (
    <FeatureCardContainer>
      <FeatureCardIcon src={iconUrl} />
      <FeatureCardTitle>{name}</FeatureCardTitle>
      <FeatureCardDescription>{description}</FeatureCardDescription>
    </FeatureCardContainer>
  );
};

const FeatureCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
`;
const FeatureCardIcon = styled.img``;
const FeatureCardTitle = styled.h3`
  text-align: center;
  font-size: 1rem;
`;
const FeatureCardDescription = styled.p`
  text-align: center;
  font-size: 0.9rem;
`;

export default FeatureCard;
