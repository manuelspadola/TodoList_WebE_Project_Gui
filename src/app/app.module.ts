import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetTodoListeComponent } from './get-todo-liste/get-todo-liste.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GetTodoListeBenutzerlistComponent } from './get-todo-liste-benutzerlist/get-todo-liste-benutzerlist.component';
import { CreateTodolisteComponent } from './create-todoliste/create-todoliste.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetAllTodoComponent } from './get-all-todo/get-all-todo.component';
import { GetTodoComponent } from './get-todo/get-todo.component';
import { GetAllTodoListeComponent } from './get-all-todo-liste/get-all-todo-liste.component';
import { GetTodoListeBybenutzeridComponent } from './get-todo-liste-bybenutzerid/get-todo-liste-bybenutzerid.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { AddTodoToTodoListeComponent } from './add-todo-to-todo-liste/add-todo-to-todo-liste.component';
import { DeleteTodoFromTodoListComponent } from './delete-todo-from-todo-list/delete-todo-from-todo-list.component';
import { DeleteBenutzerFromTodoListComponent } from './delete-benutzer-from-todo-list/delete-benutzer-from-todo-list.component';
import { AddBenutzerToTodoListeComponent } from './add-benutzer-to-todo-liste/add-benutzer-to-todo-liste.component';

import { RegisterUserService } from './shared/register-user.service';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    GetTodoListeComponent,
    HomeComponent,
    GetTodoListeBenutzerlistComponent,
    CreateTodolisteComponent,
    GetAllTodoComponent,
    GetTodoComponent,
    GetAllTodoListeComponent,
    GetTodoListeBybenutzeridComponent,
    CreateTodoComponent,
    AddTodoToTodoListeComponent,
    DeleteTodoFromTodoListComponent,
    DeleteBenutzerFromTodoListComponent,
    AddBenutzerToTodoListeComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    DateValueAccessorModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule

  ],
  providers: [RegisterUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
