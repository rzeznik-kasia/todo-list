import { Injectable } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { scan, tap } from 'rxjs/operators';
import { StatusCode, TodoItem } from '../interfaces/todo-item';
// import { StorageService } from './storage.service';

// const todoListStorageKey = 'Todo_List_Observable';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoListItems$: Observable<TodoItem[]> = this.fetchData().pipe(
    tap(data => console.log('todos', JSON.stringify(data)))
  );

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


  private todoItemModifiedSubject = new Subject<TodoItem>();
  todoItemModifiedAction$ = this.todoItemModifiedSubject.asObservable();

  todoListItemsWithCRUD$ = merge(
    this.todoListItems$,
    this.todoItemModifiedAction$
    )
  .pipe(
    scan((todoItems: TodoItem[], todoItem: TodoItem) => this.modifyTodoList(todoItems, todoItem)),
  );

  addItem(item: TodoItem) {
    item.status = StatusCode.Added;
    item.id = Date.now();
    this.todoItemModifiedSubject.next(item);
  }

  deleteItem(item: TodoItem) {
    const deletedTodoItem = { ...item };
    deletedTodoItem.status = StatusCode.Deleted;
    this.todoItemModifiedSubject.next(deletedTodoItem);
  }

  // updateItem(item, changes) {
  //   const index = this.todoListItems$.indexOf(item);
  //   this.todoListItems$[index] = { ...item, ...changes };
  //   this.saveList();
  // }

  modifyTodoList(todoItems: TodoItem[], todoItem: TodoItem): TodoItem[] {
    if (todoItem.status === StatusCode.Added) {
      return [
        ...todoItems,
        { ...todoItem, status: StatusCode.Unchanged }
      ];
    }
    if (todoItem.status === StatusCode.Deleted) {
      return todoItems.filter(item => item.id !== todoItem.id);
    }
  }

}
