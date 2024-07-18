import styled from "styled-components";
import { hex2rgba } from "../../utils";

export interface StoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  status: StatusType;
  type: CardType;
}

export type CardType = "legendary" | "epic" | "story" | "task";
export type StatusType = "todo" | "suspend" | "working" | "done";

const colors = {
  todo: "#eff0f0",
  suspend: "#ffeeee",
  working: "#e8ebf4",
  done: "#e0f5de",
  legendary: "#FEB207",
  epic: "#7C2FDB",
  story: "#54B02E",
  task: "#3E9CE2",
} as const;

export function StoryCardComponent({
  type,
  status,
  title,
  description,
  ...props
}: StoryCardProps) {
  return (
    <Container
      {...props}
      style={{ backgroundColor: hex2rgba(colors[status], 1), ...props.style }}
    >
      <Title>{title}</Title>
      <Desc>{description}</Desc>
      <SideBar style={{ backgroundColor: colors[type] }} />
    </Container>
  );
}

const CARD_SIZE = 200;
const Container = styled.div`
  position: relative;
  width: ${CARD_SIZE}px;
  height: ${CARD_SIZE * 0.618}px;
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
