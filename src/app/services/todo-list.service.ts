import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TodoItem } from '../interfaces/todo-item';
// import { StorageService } from './storage.service';

// const todoListStorageKey = 'Todo_List_Observable';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  public todoListItems$: Observable<TodoItem[]> = this.fetchData().pipe(
    tap(data => console.log('todos', JSON.stringify(data)))
  );

  //storageService.getData(todoListStorageKey) || defaultTodoList;
       
  fetchData(): Observable<TodoItem[]> {
    return new Observable((observer) => {
      const data = [
        {title: 'install NodeJS'},
        {title: 'install Angular CLI'},
        {title: 'create new app'},
        {title: 'serve app'},
        {title: 'develop app'},
        {title: 'deploy app'},
      ];
      observer.next(data);
      observer.complete();
    });
  }

  // saveList() {
  //   this.storageService.setData(todoListStorageKey, this.todoListItems$);
  // }

  // addItem(item: TodoItem) {
  //   this.todoListItems$.push(item);
  //   this.saveList();
  // }

  // updateItem(item, changes) {
  //   const index = this.todoListItems$.indexOf(item);
  //   this.todoListItems$[index] = { ...item, ...changes };
  //   this.saveList();
  // }

  // deleteItem(item) {
  //   const index = this.todoListItems$.indexOf(item);
  //   this.todoListItems$.splice(index, 1);
  //   this.saveList();
  // }

}
