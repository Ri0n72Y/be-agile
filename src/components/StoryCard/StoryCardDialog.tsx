import styled from "styled-components";
import { CardType, colors, StoryCardProps } from "./common";
import cross from "../../assets/cross.svg";
import back from "../../assets/back.svg";
import Markdown from "react-markdown";

export function StoryCardDialog({
  title,
  description,
  onClose,
  type,
  ...rest
}: StoryCardProps & { onClose: () => void }) {
  return (
    <Wrapper
      onWheel={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      {...rest}
    >
      <ContentWrapper>
        <Title>{title}</Title>
        <Summary>
          <Markdown>{description}</Markdown>
        </Summary>
      </ContentWrapper>
      <SideBar style={{ backgroundColor: colors[type as CardType] }} />
      <Cross onClick={onClose} />
      <Back onClick={onClose} />
    </Wrapper>
  );
}

const SideBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1rem;
  height: 100%;
  opacity: 0.4;
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 70%;

  @media screen and (max-width: 960px) {
    width: 95%;
  }
`;

const Summary = styled.div`
  opacity: 0.8;
  height: 0;
  flex: 1;
  overflow-y: scroll;
`;

const Title = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.8;
  font-weight: 600;
  border-bottom: 1px solid #ccc;

  @media screen and (max-width: 960px) {
    margin-left: 2rem;
  }
`;

const Cross = styled.img.attrs({ src: cross })`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const Back = styled.img.attrs({ src: back })`
  display: none;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 80vw;
  max-width: 80vw;
  min-height: 60vh;
  min-width: 320px;
  min-height: 500px;
  max-height: 95%;
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  filter: drop-shadow(0px 0px 2px #ededed);
  overflow: hidden;
  color: #333;

  @media (max-width: 960px) or (max-height: 500px) {
    width: 100%;
    max-width: unset;
    height: 100%;
    padding: 0;
    padding-left: 2rem;
    padding-top: 1rem;
    border-radius: 0;
  }
`;
