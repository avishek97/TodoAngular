import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AllTodoComponent } from './all-todo/all-todo.component';
import { PendingTodoComponent } from './pending-todo/pending-todo.component';
import { CompletedTodoComponent } from './completed-todo/completed-todo.component';
import { DeleTodoComponent } from './dele-todo/dele-todo.component';




@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    AllTodoComponent,
    PendingTodoComponent,
    CompletedTodoComponent,
    DeleTodoComponent,
    
    
  ],
  imports: [
    BrowserModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
