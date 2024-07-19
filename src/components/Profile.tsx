import styled from "styled-components";
import { Circle } from "./Progress/Circle";

export function Profile() {
  return (
    <Wrapper>
      <Icon
        src="https://avatars.githubusercontent.com/u/16500109?v=4&size=128"
        alt="Icon"
      />
      <Text>
        Ziyu "Rion" Tao
        <br />
        <Sub>Software Engineer</Sub>
        <br />
        <Third>Undergraduate: ANU</Third>
      </Text>
      <SkillContainer>
        <Circle progress={0.6} label="JSX" />
        <Circle progress={0.9} label="TS" />
        <Circle progress={0.2} label="Python" />
      </SkillContainer>
      <SkillContainer>
        <Circle progress={0.5} label="Agile" />
        <Circle progress={0.8} label="Steam" />
        <Circle progress={1} label="Sincere" />
      </SkillContainer>
    </Wrapper>
  );
}

const SkillContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.8rem;
  padding: 0.3rem;
`;

const Third = styled.span`
  opacity: 0.6;
  font-size: 0.8rem;
`;

const Sub = styled.span`
  font-style: italic;
  font-size: 1rem;
  opacity: 0.8;
`;

const Text = styled.h3`
  font-weight: 400;
  text-align: center;
`;

const Icon = styled.img`
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  margin: 2rem auto 0;
  border: 0.2rem solid #f5f6f7;
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100vh;
  min-width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: rgb(39, 33, 46);

  @media screen and (max-width: 768px) {
    position: relative;
    width: 16rem;
    padding-bottom: 2rem;
    height: fit-content;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
  }
`;
