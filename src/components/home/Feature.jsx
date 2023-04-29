import React from "react";
import styled from "styled-components";
import FeatureCard from "./FeatureCard";
import DATA from "../../constants/feature-data";

const Feature = () => {
  return (
    <FeatureContainer>
      <FeatureHeading>Enjoy With Features</FeatureHeading>
      <FeatureSection>
        {DATA.map(({ title, data }) => (
          <FeatureSectionComponent title={title} data={data} />
        ))}
      </FeatureSection>
    </FeatureContainer>
  );
};

const FeatureContainer = styled.div`
  background: url("${require("../../assets/imgs/feature-background.png")}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const FeatureHeading = styled.h2`
  text-align: center;
  padding: 3rem 0;
  background: transparent;
  font-size: 1.8rem;
`;
const FeatureSection = styled.div`
  background: url("${require("../../assets/imgs/feature-container-background.png")}");
  backgroung-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;
  padding: 1.5rem 3rem;
`;

export default Feature;

const FeatureSectionComponent = ({ title, data }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <FeatureListContainer>
        {data.map((feature) => (
          <FeatureCard {...feature} />
        ))}
      </FeatureListContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.div``;
const SectionTitle = styled.h2``;
const FeatureListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  gap: 1rem;
  margin: 2rem 0;
`;
