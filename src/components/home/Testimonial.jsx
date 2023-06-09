import React from "react";
import styled from "styled-components";
import TESTIMONIAL_DATA from "../../constants/testimonial-data";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <TestimonialContainer>
      <FeatureHeading>Testimonial</FeatureHeading>
      <SectionDescription>
        What artistes and their fans say about KoRrin
      </SectionDescription>
      <TestimonialList>
        {TESTIMONIAL_DATA.map((testimonial, index) => (
          <TestimonialCard {...testimonial} key={index.toString()} />
        ))}
      </TestimonialList>
    </TestimonialContainer>
  );
};

const TestimonialContainer = styled.div`
  background-color: #dee2ed;
  padding: 8rem 0;
  padding-top: 4rem;
`;

const FeatureHeading = styled.h2`
  text-align: center;
  padding: 3rem 0 1rem;
  background: transparent;
  font-size: 1.8rem;
`;

const SectionDescription = styled.p`
  text-align: center;
  font-size: 0.9rem;
  padding-bottom: 3rem;
`;

const TestimonialList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 90%;
  margin: 0 auto;
  padding: 1.5rem 3rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 1.5rem 0;
  }
`;
export default Testimonial;
