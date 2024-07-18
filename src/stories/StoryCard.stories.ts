import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { StoryCardComponent } from "../components/StoryCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Agile/StoryCard",
  component: StoryCardComponent,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof StoryCardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TodoStory: Story = {
  args: {
    title: "Story Card",
    description: "This is a story, not start yet, can be start anytime.",
    status: "todo",
    type: "story",
  },
};
export const WorkingTask: Story = {
  args: {
    title: "Task Card",
    description: "This is a task, in progress, should not more than 3.",
    status: "working",
    type: "task",
  },
};
export const DoneEpic: Story = {
  args: {
    title: "Epic Card",
    description: "This is a epic, done, Woooooooooow.",
    status: "done",
    type: "epic",
  },
};
export const SuspendLegendary: Story = {
  args: {
    title: "Legendary Card",
    description: "Too giant, even larger than epic. Implement with life long",
    status: "suspend",
    type: "legendary",
  },
};
