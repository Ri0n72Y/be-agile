import styled from "styled-components";
import { ColumnComponent } from "../../components/Column";
import {
  type CardType,
  type StatusType,
  StoryCardComponent,
} from "../../components/StoryCard";
import docs from "../../documents/my-board.json";

export function Board() {
  return (
    <BoardComponent>
      <ColumnComponent title="✒️先写着">
        {docs.todo.map((e) => (
          <StoryCardComponent
            key={e.key}
            type={e.type as CardType}
            status={e.status as StatusType}
            title={e.title}
            description={e.description}
          />
        ))}
      </ColumnComponent>
      <ColumnComponent title="😎在做了">
        {docs.working.map((e) => (
          <StoryCardComponent
            key={e.key}
            type={e.type as CardType}
            status={e.status as StatusType}
            title={e.title}
            description={e.description}
          />
        ))}
      </ColumnComponent>
      <ColumnComponent title="⏳卡住了">
        {docs.suspend.map((e) => (
          <StoryCardComponent
            key={e.key}
            type={e.type as CardType}
            status={e.status as StatusType}
            title={e.title}
            description={e.description}
          />
        ))}
      </ColumnComponent>
      <ColumnComponent title="🎉做完了">
        {docs.done.map((e) => (
          <StoryCardComponent
            key={e.key}
            type={e.type as CardType}
            status={e.status as StatusType}
            title={e.title}
            description={e.description}
          />
        ))}
      </ColumnComponent>
    </BoardComponent>
  );
}

const BoardComponent = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 2rem;
  background-color: #fafaf9;
  width: fit-content;
`;
