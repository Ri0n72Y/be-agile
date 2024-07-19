import { ColumnComponent } from "../../components/Column";
import { BoardComponent } from "./styles";
import docs from "../../documents/my-skill.json";
import { StoryCardComponent } from "../../components/StoryCard";
import { useState } from "react";
import { StoryCardDialog } from "../../components/StoryCard/StoryCardDialog";
import { DialogWrapper } from "../../components/DialogWrapper";
import { StoryCardProps } from "../../components/StoryCard/common";

export function Skill() {
  const [dialog, setDialog] = useState<StoryCardProps>();
  return (
    <BoardComponent style={{ color: "#2e343f" }}>
      <ColumnComponent title="💼 Competent At...">
        {docs.competent.map((e) => (
          <StoryCardComponent {...e} onClick={() => setDialog(e)} />
        ))}
      </ColumnComponent>
      <ColumnComponent title="📚 Experienced At...">
        {docs.experienced.map((e) => (
          <StoryCardComponent {...e} onClick={() => setDialog(e)} />
        ))}
      </ColumnComponent>
      <ColumnComponent title="🛠️ Used...">
        {docs.used.map((e) => (
          <StoryCardComponent {...e} onClick={() => setDialog(e)} />
        ))}
      </ColumnComponent>
      {dialog && (
        <DialogWrapper>
          <StoryCardDialog {...dialog} onClose={() => setDialog(undefined)} />
        </DialogWrapper>
      )}
    </BoardComponent>
  );
}
