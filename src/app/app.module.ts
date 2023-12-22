// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule, MatFormFieldModule, MatSlideToggleModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
// components
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/todo.component';
// services
import { ModelService } from './ModelService';
import { IModelService } from './IModelService';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent, ToDoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: IModelService, useClass: ModelService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
