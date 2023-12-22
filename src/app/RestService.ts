import { Injectable } from '@angular/core';
import { ToDoItem } from './ToDoItem';
import { IModelService } from './IModelService';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService implements IModelService {
  private items: ToDoItem[] = [];
  private apiUrl = 'http://localhost:3001/api';
  constructor() {}

  getItems() {
    return of(this.items);
  }

  addItem(value: string): Observable<boolean> {
    return Observable.create((observer: any) => {
      let val = value?.trim()?.toLowerCase();
      if (val) {
        fetch(this.apiUrl, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            query: val,
          }),
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw Error('hata');
            }
          })
          .then((foundItems) => {
            if (foundItems.length == 0) {
              observer.next(false);
              observer.complete();
            } else {
              observer.next(true);
              observer.complete();
            }
          })
          .catch(() => {
            observer.next(false);
            observer.complete();
          });
      }
    });
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
