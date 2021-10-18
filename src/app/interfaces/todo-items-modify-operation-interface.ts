import { StatusCode } from '../enums/status-code';
import { TodoItem } from './todo-item';

export interface TodoItemsModifyOperation {
  todoItem: TodoItem;
  status: StatusCode;
}
