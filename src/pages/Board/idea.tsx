import { ColumnComponent } from "../../components/Column";
import { StoryCardComponent } from "../../components/StoryCard";
import docs from "../../documents/my-board.json";
import { BoardComponent } from "./styles";

export function Idea() {
  return (
    <BoardComponent>
      <ColumnComponent title="✒️先写着">
        {docs.todo.map((e) => (
          <StoryCardComponent {...e} />
        ))}
      </ColumnComponent>
      <ColumnComponent title="😎在做了">
        {docs.working.map((e) => (
          <StoryCardComponent {...e} />
        ))}
      </ColumnComponent>
      <ColumnComponent title="⏳卡住了">
        {docs.suspend.map((e) => (
          <StoryCardComponent {...e} />
        ))}
      </ColumnComponent>
      <ColumnComponent title="🎉做完了">
        {docs.done.map((e) => (
          <StoryCardComponent {...e} />
        ))}
      </ColumnComponent>
    </BoardComponent>
  );
}
