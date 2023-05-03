import React, { useRef, useState } from "react";
import styled from "styled-components";
import FAQ_DATA from "../../constants/faqs";
import FaqCard from "./FaqCard";

const FAQs = () => {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const innerRightModal = useRef(null);

  const showAnswer = (answer, question) => {
    setAnswer(answer);
    setQuestion(question);
    innerRightModal.current.classList.add("show");
  };

  const hideAnswer = () => {
    setAnswer("");
    setQuestion("");
    innerRightModal.current.classList.remove("show");
  };
  return (
    <FaqContainer>
      <FaqHeading>FAQs</FaqHeading>
      <FaqSection>
        <LeftContainer>
          <FaqHeroImage src={require("../../assets/imgs/FAQs.png")} />
        </LeftContainer>
        <RightContainer>
          <InnerRightContainer ref={innerRightModal}>
            <QuestionContainer>
              {FAQ_DATA.map((data, index) => (
                <FaqCard
                  {...data}
                  action={showAnswer}
                  reverse={false}
                  key={index.toString()}
                />
              ))}
            </QuestionContainer>
            <AnswerContainer>
              <FaqCard
                question={question}
                anwser={answer}
                action={hideAnswer}
                reverse={true}
              />
              <Answer>{answer}</Answer>
            </AnswerContainer>
          </InnerRightContainer>
        </RightContainer>
      </FaqSection>
    </FaqContainer>
  );
};

const FaqContainer = styled.div`
  background-color: #fff;
  margin: 0rem 0;
  padding-bottom: 3rem;
`;

const FaqHeading = styled.h2`
  text-align: center;
  padding: 3rem 0 1rem;
  background: transparent;
  font-size: 1.8rem;
`;

const FaqSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 90%;
  margin: 0 auto;
  padding: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 3rem 0;
  }
`;
const LeftContainer = styled.div`
  flex-basis: 35%;
  display: flex;
  max-width: 300px;
  max-height: 300px;
  aspect-ratio: 1/1;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  overflow: hidden;
`;
const RightContainer = styled.div`
  flex-basis: 65%;
  background-color: #dee2ed;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-basis: 100%;
    width: 100%;
  }
`;

const FaqHeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InnerRightContainer = styled.div`
  display: flex;
  width: 200%;
  transition: 0.5s ease;
  overflow: hidden;
  transform: translateX(0);

  &.show {
    transform: translateX(-50%);
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 0.8rem;
  flex-basis: 100%;
  padding: 3rem;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

const AnswerContainer = styled.div`
  flex-basis: 100%;
  padding: 3rem;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;
const Answer = styled.p`
  font-size: 0.9rem;
  padding: 0.7rem 1rem;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export default FAQs;
