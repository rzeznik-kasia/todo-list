import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent {
  public todoListItems$: Observable<TodoItem[]> = this.todoListService.todoListItems$;

  constructor(private todoListService: TodoListService) {}

  // addItem(title: string) {
  //   this.todoListService.addItem({ title });
  // }

  // removeItem(item) {
  //   this.todoListService.deleteItem(item);
  // }

  // updateItem(item, changes) {
  //   this.todoListService.updateItem(item, changes);
  // }
}
