import { useState } from "react";
import { ColumnComponent } from "../../components/Column";
import { DialogWrapper } from "../../components/DialogWrapper";
import { StoryCardComponent } from "../../components/StoryCard";
import { StoryCardProps } from "../../components/StoryCard/common";
import { StoryCardDialog } from "../../components/StoryCard/StoryCardDialog";
import docs from "../../documents/my-skill.json";
import { useMedia } from "../../utils/useMedia";
import { BoardComponent } from "./styles";

const Large = 300 as const;
const Small = 240 as const;
export function Skill() {
  const [dialog, setDialog] = useState<StoryCardProps>();
  const media = useMedia("(max-width: 960px)");
  return (
    <BoardComponent style={{ color: "#2e343f" }}>
      <ColumnComponent title="💼 Competent At...">
        {docs.competent.map((e) => (
          <StoryCardComponent
            {...e}
            key={e.key}
            $cardSize={media ? Small : Large}
            onClick={() => setDialog(e)}
          />
        ))}
      </ColumnComponent>
      <ColumnComponent title="📚 Experienced At...">
        {docs.experienced.map((e) => (
          <StoryCardComponent
            {...e}
            key={e.key}
            $cardSize={media ? Small : Large}
            onClick={() => setDialog(e)}
          />
        ))}
      </ColumnComponent>
      <ColumnComponent title="🛠️ Used...">
        {docs.used.map((e) => (
          <StoryCardComponent
            {...e}
            key={e.key}
            $cardSize={media ? Small : Large}
            onClick={() => setDialog(e)}
          />
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
