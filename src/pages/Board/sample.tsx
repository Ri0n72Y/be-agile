import { ColumnComponent } from "../../components/Column";
import { StoryCardComponent } from "../../components/StoryCard";
import { BoardComponent } from "./styles";

const data = {
  todo: [
    {
      key: "1",
      title: "Story Card",
      description: "This is a story, not start yet, can be start anytime.",
      status: "todo",
      type: "story",
    },
  ],
  working: [
    {
      key: "2",
      title: "Task Card",
      description: "This is a task, in progress, should not more than 3.",
      status: "working",
      type: "task",
    },
  ],
  done: [
    {
      key: "3",
      title: "Epic Card",
      description: "This is a epic, done, Woooooooooow.",
      status: "done",
      type: "epic",
    },
  ],
  suspend: [
    {
      key: "4",
      title: "Legendary Card",
      description: "Too giant, even larger than epic. Implement with life long",
      status: "suspend",
      type: "legendary",
    },
  ],
};

export function SampleBoard() {
  return (
    <BoardComponent>
      <ColumnComponent title="Suspend">
        {data.suspend.map((e) => (
          <StoryCardComponent {...e} />
        ))}
      </ColumnComponent>
      <ColumnComponent title="To do">
        {data.todo.map((e) => (
          <StoryCardComponent {...e} />
        ))}
      </ColumnComponent>
      <ColumnComponent title="In Progress">
        {data.working.map((e) => (
          <StoryCardComponent {...e} />
        ))}
      </ColumnComponent>
      <ColumnComponent title="Done">
        {data.done.map((e) => (
          <StoryCardComponent {...e} />
        ))}
      </ColumnComponent>
    </BoardComponent>
  );
}
