import { Component, TemplateRef, ViewChild } from '@angular/core';
import { IModelService } from '../IModelService';
import { Observable } from 'rxjs';
import { ToDoItem } from '../ToDoItem';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class ToDoComponent {
  items: Observable<ToDoItem[]>;
  selected: number[] = [];

  @ViewChild('notFoundTemplate', { static: true })
  //@ts-ignore
  private notFoundTemplate: TemplateRef<any>;

  constructor(private model: IModelService, public dialog: MatDialog) {
    this.items = model.getItems();
  }

  setSelected($event: any, index: number) {
    console.log('aaa');
    if ($event.checked == true) {
      if (this.selected.includes(index) == false) {
        this.selected.push(index);
      }
    } else {
      this.selected.splice(this.selected.indexOf(index), 1);
    }
  }

  isSelected(index: number) {
    return this.selected.includes(index);
  }

  addItem(value: string) {
    this.model.addItem(value).subscribe((item) => {
      if (item === false) {
        alert('Not found in master list.');
     //    this.dialog.open(this.notFoundTemplate, {
     //      width: '340px'
     //    });
      }
    });
  }

  removeItem(index: number) {
    this.selected.splice(this.selected.indexOf(index), 1);
    this.model.removeItem(index);
  }
}
