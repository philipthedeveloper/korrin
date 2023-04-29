import React from "react";
import styled from "styled-components";
import TEAM_MEMBER from "../../constants/team-data";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <TeamContainer>
      <TeamHeading>Our Team</TeamHeading>
      <TeamSection>
        {TEAM_MEMBER.map((member) => (
          <TeamCard {...member} />
        ))}
      </TeamSection>
    </TeamContainer>
  );
};

const TeamContainer = styled.div`
  min-height: 80vh;
  margin: 0rem 0;
  padding-bottom: 3rem;
`;

const TeamHeading = styled.h2`
  text-align: center;
  padding: 3rem 0 1rem;
  background: transparent;
  font-size: 1.8rem;
`;

const TeamSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 90%;
  margin: 0 auto;
  padding: 3rem;
`;

export default Team;
