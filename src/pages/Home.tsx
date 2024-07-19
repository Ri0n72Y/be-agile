import styled from "styled-components";
import github from "../assets/github.svg";
import { Profile } from "../components/Profile";
import { Skill } from "./Board/skill";

export function Home() {
  return (
    <Container>
      <Title>Ri0n72Y's Profile</Title>
      <Profile />
      <Skill />
      <SideTools />
    </Container>
  );
}

const Title = styled.h1`
  font-weight: 600;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 2rem;
  margin-left: 16rem;

  @media screen and (max-width: 768px) {
    align-items: center;
    width: 100vw;
    margin-left: 0;
  }

  @media screen and (max-width: 320px) {
    width: 100%;
  }
`;

function SideTools() {
  return (
    <SideToolsContainer>
      <Tool href="https://github.com/Ri0n72Y" target="_blank">
        <img src={github} alt="GitHub" />
      </Tool>
      <Tool href="https://steamcommunity.com/id/riontzy" target="_blank">
        <img
          src="https://store.steampowered.com/favicon.ico"
          alt="steam"
          width={24}
          height={24}
        />
      </Tool>
    </SideToolsContainer>
  );
}

const SideToolsContainer = styled.div`
  position: fixed;
  top: 50%;
  right: -4rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 8px 1.6rem 8px 8px;
  background-color: #f5f6f7;
  border-radius: 2rem 0 0 2rem;
  transition: right 0.3s cubic-bezier(0, 0, 0.2, 1.2);

  &:hover {
    right: -1rem;
  }

  @media screen and (max-width: 768px) {
    top: 4rem;
    right: -1rem;
  }
`;

const Tool = styled.a`
  padding: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #f5f6f7;
  cursor: pointer;
  transition: background-color 0.3s ease-out;

  &:hover {
    background-color: #ccd0d4;
  }
`;
