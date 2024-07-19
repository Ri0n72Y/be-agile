import styled from "styled-components";
import { StoryCardProps } from "./common";
import cross from "../../assets/cross.svg";
import back from "../../assets/back.svg";

export function StoryCardDialog(
  props: StoryCardProps & { onClose: () => void }
) {
  return (
    <Wrapper>
      <Cross onClick={props.onClose} />
      <Back onClick={props.onClose} />
    </Wrapper>
  );
}

const Cross = styled.img.attrs({ src: cross })`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Back = styled.img.attrs({ src: back })`
  display: none;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  height: 80%;
  min-width: 320px;
  min-height: 500px;
  background: white;
  border-radius: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;
