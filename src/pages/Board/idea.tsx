import { useState } from "react";
import { ColumnComponent } from "../../components/Column";
import { DialogWrapper } from "../../components/DialogWrapper";
import { StoryCardComponent } from "../../components/StoryCard";
import { StoryCardProps } from "../../components/StoryCard/common";
import { StoryCardDialog } from "../../components/StoryCard/StoryCardDialog";
import docs from "../../documents/my-board.json";
import { BoardComponentStyle } from "../../components/Board/styles";
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
    <BoardComponentStyle>
      {done && (
        <Column title="🎉做完了">
          {docs.done.map((e) => (
            <Story key={e.keyword} {...e} onClick={() => setDialog(e)} />
          ))}
        </Column>
      )}
      {working && (
        <Column title="😎在做了">
          {docs.working.map((e) => (
            <Story key={e.keyword} {...e} onClick={() => setDialog(e)} />
          ))}
        </Column>
      )}
      {todo && (
        <Column title="✒️先写着">
          {docs.todo.map((e) => (
            <Story key={e.keyword} {...e} onClick={() => setDialog(e)} />
          ))}
        </Column>
      )}
      {suspend && (
        <Column title="⏳卡住了">
          {docs.suspend.map((e) => (
            <Story key={e.keyword} {...e} onClick={() => setDialog(e)} />
          ))}
        </Column>
      )}
      {dialog && (
        <DialogWrapper>
          <StoryCardDialog {...dialog} onClose={() => setDialog(undefined)} />
        </DialogWrapper>
      )}
    </BoardComponentStyle>
  );
}

const Column = styled(ColumnComponent)`
  color: black;
`;

const Story = StoryCardComponent;
