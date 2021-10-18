import { Injectable } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { scan } from 'rxjs/operators';
import { StatusCode, TodoItem } from '../interfaces/todo-item';
// import { StorageService } from './storage.service';

// const todoListStorageKey = 'Todo_List_Observable';
interface TodoItemsModifyOperationInterface {
  todoItem: TodoItem,
  status: StatusCode
}
@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoListItems$: Observable<TodoItem[]> = this.fetchData();
  //storageService.getData(todoListStorageKey) || defaultTodoList;
       
  fetchData(): Observable<TodoItem[]> {
    return new Observable((observer) => {
      const data = [
        {title: 'install NodeJS', id: 1634477705055},
        {title: 'install Angular CLI', id: 1634477716641},
        {title: 'create new app', id: 1634477710000},
        {title: 'serve app', id: 16344777100001},
        {title: 'develop app', id: 16344777100002},
        {title: 'deploy app', id: 16344777100003},
      ];
      observer.next(data);
      observer.complete();
    });
  }

  // saveList() {
  //   this.storageService.setData(todoListStorageKey, this.todoListItems$);
  // }

  private todoItemModifiedSubject = new Subject<TodoItemsModifyOperationInterface>();
  todoItemModifiedAction$ = this.todoItemModifiedSubject.asObservable();

  todoListItemsWithCRUD$ = merge(
    this.todoListItems$,
    this.todoItemModifiedAction$
    )
  .pipe(
    scan((todoItems: TodoItem[], operation: TodoItemsModifyOperationInterface) => this.modifyTodoList(todoItems, operation.todoItem, operation.status)),
  );

  addItem(item: TodoItem) {
    const addedTodoItem = { ...item };
    addedTodoItem.id = Date.now(); //TODO
    this.todoItemModifiedSubject.next({todoItem: addedTodoItem, status: StatusCode.Added});
  }

  deleteItem(item: TodoItem) {
    const deletedTodoItem = { ...item };
    this.todoItemModifiedSubject.next({todoItem: deletedTodoItem, status: StatusCode.Deleted});
  }

  updateItem(item: TodoItem, changes: Partial<TodoItem>) {
    const updatedTodoItem = { ...item, ...changes };
    this.todoItemModifiedSubject.next({todoItem: updatedTodoItem, status: StatusCode.Updated});
  }

  modifyTodoList(todoItems: readonly TodoItem[], todoItem: TodoItem, status: StatusCode): TodoItem[] {
    if (status === StatusCode.Added) {
      return [ ...todoItems, { ...todoItem }];
    }

    if (status === StatusCode.Deleted) {
      return todoItems.filter(item => item.id !== todoItem.id);
    }

    if (status === StatusCode.Updated) {
      return todoItems.map(item => item.id === todoItem.id ? { ...todoItem} : item);
    }
  }
}
