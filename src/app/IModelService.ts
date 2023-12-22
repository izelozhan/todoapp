import { Observable } from 'rxjs';
import { ToDoItem } from './ToDoItem';

export abstract class IModelService {
  public abstract getItems(): Observable<ToDoItem[]>;
  public abstract addItem(value: string): Observable<boolean>;
  public abstract removeItem(index: number): void;
}
