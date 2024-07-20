import { type ReactNode } from "react";
import { BoardComponentStyle } from "./styles";
import styled from "styled-components";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  boardTitle?: ReactNode;
  children: ReactNode;
}
export function BoardComponent({ boardTitle, children, ...props }: Props) {
  return (
    <BoardComponentStyle {...props}>
      {boardTitle && <Title>{boardTitle}</Title>}
      {children}
    </BoardComponentStyle>
  );
}

const Title = styled.h2`
  padding: 0;
  margin: 0;
  font-weight: 600;
  font-size: 1.2rem;
  flex-basis: 100%;
`;
