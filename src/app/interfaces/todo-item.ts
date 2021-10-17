export interface TodoItem {
  title: string;
  completed?: boolean;

  id?: number;
  status?: StatusCode;
}

export enum StatusCode {
  Unchanged,
  Added,
  Deleted,
  Updated
}