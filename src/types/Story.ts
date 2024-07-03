enum StatusEnum {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

enum PriorityEnum {
  LOW = -1,
  MEDIUM = 0,
  HIGH = 1,
}

export interface IStory {
  readonly id: string;
  title: string;
  /** @default "" */
  description: string;
  /** @default "TODO" */
  status: StatusEnum;
  readonly createdAt: string;
  readonly createdBy: string;
  updatedAt: string;
  updatedBy: string;
  /** @default false */
  isArchived: boolean;
  extraFields: Partial<Fields>;
}

export interface Fields {
  /** @description Person who assigned this story */
  assignee: string;
  parentId: string;
  priority: PriorityEnum;
  /** @description Story point estimate */
  storyPointEstimate: number;
  development: string;
  relationships: Record<string, string>;
  labelIds: string[];
  tags: string[];
  [key: string]: unknown;
}
