export interface StoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  status: StatusType | NonNullable<string>;
  type: CardType | NonNullable<string>;
}

export type CardType = "legendary" | "epic" | "story" | "task";
export type StatusType = "todo" | "suspend" | "working" | "done";

export const colors = {
  todo: "#eff0f0",
  suspend: "#ffeeee",
  working: "#e8ebf4",
  done: "#e0f5de",
  legendary: "#FEB207",
  epic: "#7C2FDB",
  story: "#54B02E",
  task: "#3E9CE2",
} as const;
