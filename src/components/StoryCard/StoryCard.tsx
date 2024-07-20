import styled from "styled-components";
import { hex2rgba } from "../../utils";
import { StoryCardProps, colors, StatusType, CardType } from "./common";

export function StoryCardComponent({
  type,
  status,
  title,
  description,
  ...props
}: StoryCardProps & { $cardSize?: number }) {
  const color = hex2rgba(colors[status as StatusType], 1);
  return (
    <Container
      {...props}
      style={{
        backgroundColor: color,
        ...(!description ? { height: "auto" } : {}),
        ...props.style,
      }}
    >
      <Title>{title}</Title>
      {!!description && <Desc>{description}</Desc>}
      <Gradient $color={color} />
      <SideBar style={{ backgroundColor: colors[type as CardType] }} />
    </Container>
  );
}

const Gradient = styled.div<{ $color?: string }>`
  position: absolute;
  bottom: 0.4rem;
  left: 0;
  width: 100%;
  height: 3rem;
  background: ${({ $color }) =>
    `linear-gradient(0deg, ${$color || "#ffffff"} 0%, #00000000 100%)`};
`;

const CARD_SIZE = 200;
const Container = styled.div<{ $cardSize?: number }>`
  position: relative;
  width: ${({ $cardSize = CARD_SIZE }) => $cardSize}px;
  height: ${({ $cardSize = CARD_SIZE }) => $cardSize * 0.6}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: white;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  filter: drop-shadow(1px 4px 10px rgba(122, 111, 101, 0.2));
  border-radius: 0.6rem;
  padding: 0.4rem 1rem;
  gap: 0.6rem;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.6;
  flex-shrink: 0;
  transition:
    opacity 0.15s ease-out,
    width 0.3s ease-out,
    height 0.3s ease-out;

  &:hover {
    opacity: 1;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

const Desc = styled.div`
  font-weight: 400;
  font-size: 0.8rem;
  display: flex;
  white-space: pre-wrap;
  flex: 1;
  height: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SideBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0.3rem;
  height: 100%;
`;
