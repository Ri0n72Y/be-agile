import { useState } from "react";
import { ColumnComponent } from "../../components/Column";
import { DialogWrapper } from "../../components/DialogWrapper";
import { StoryCardComponent } from "../../components/StoryCard";
import { StoryCardProps } from "../../components/StoryCard/common";
import { StoryCardDialog } from "../../components/StoryCard/StoryCardDialog";
import docs from "../../documents/my-board.json";
import { BoardComponent } from "./styles";
import styled from "styled-components";

interface Props {
  done?: boolean;
  working?: boolean;
  todo?: boolean;
  suspend?: boolean;
}
export function Idea({
  done = true,
  working = true,
  todo = false,
  suspend = false,
}: Props) {
  const [dialog, setDialog] = useState<StoryCardProps>();
  return (
    <BoardComponent>
      {done && (
        <Column title="🎉做完了">
          {docs.done.map((e) => (
            <Story {...e} onClick={() => setDialog(e)} />
          ))}
        </Column>
      )}
      {working && (
        <Column title="😎在做了">
          {docs.working.map((e) => (
            <Story {...e} onClick={() => setDialog(e)} />
          ))}
        </Column>
      )}
      {todo && (
        <Column title="✒️先写着">
          {docs.todo.map((e) => (
            <Story {...e} onClick={() => setDialog(e)} />
          ))}
        </Column>
      )}
      {suspend && (
        <Column title="⏳卡住了">
          {docs.suspend.map((e) => (
            <Story {...e} onClick={() => setDialog(e)} />
          ))}
        </Column>
      )}
      {dialog && (
        <DialogWrapper>
          <StoryCardDialog {...dialog} onClose={() => setDialog(undefined)} />
        </DialogWrapper>
      )}
    </BoardComponent>
  );
}

const Column = styled(ColumnComponent)`
  color: black;
`;

const Story = StoryCardComponent;
