import { Injectable } from '@angular/core';
import { ToDoItem } from './ToDoItem';
import { IModelService } from './IModelService';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModelService implements IModelService {
  private items: ToDoItem[] = [];
  private master = [
    { name: 'List Item 1' },
    { name: 'List Item 2' },
    { name: 'List Item 3' },
    { name: 'List Item 4' },
    { name: 'List Item 5' },
    { name: 'asd' },
  ];

  constructor() {}

  getItems() {
    return of(this.items);
  }

  addItem(value: string): Observable<boolean> {
    let val = value?.trim()?.toLowerCase();
    if (val) {
      let item = this.master.find(
        (item) => item.name?.trim()?.toLowerCase() == val
      );
      if (item) {
        this.items.push({ name: item.name });
        return of(true);
      }
    }
    return of(false);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
