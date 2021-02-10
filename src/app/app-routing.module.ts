import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetTodoListeComponent } from './get-todo-liste/get-todo-liste.component';
import { HomeComponent } from './home/home.component';
import { GetTodoListeBenutzerlistComponent } from './get-todo-liste-benutzerlist/get-todo-liste-benutzerlist.component';
import { CreateTodolisteComponent } from './create-todoliste/create-todoliste.component';
import { GetAllTodoComponent } from './get-all-todo/get-all-todo.component';
import { GetTodoComponent } from './get-todo/get-todo.component';
import { GetAllTodoListeComponent } from './get-all-todo-liste/get-all-todo-liste.component';
import { GetTodoListeBybenutzeridComponent } from './get-todo-liste-bybenutzerid/get-todo-liste-bybenutzerid.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { AddTodoToTodoListeComponent } from './add-todo-to-todo-liste/add-todo-to-todo-liste.component';
import { DeleteTodoFromTodoListComponent } from './delete-todo-from-todo-list/delete-todo-from-todo-list.component';
import { DeleteBenutzerFromTodoListComponent } from './delete-benutzer-from-todo-list/delete-benutzer-from-todo-list.component';
import { AddBenutzerToTodoListeComponent } from './add-benutzer-to-todo-liste/add-benutzer-to-todo-liste.component';
import { RegisterUserComponent } from './register-user/register-user.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full' // damit legen wir fest, dass diese Route nur dann gilt wenn / aufgerufen wird,
  },                   // nicht aber dann wenn diese URL nur als Präfix einer anderen aufgerufen wird
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'showTodoListe',
    component: GetTodoListeComponent
  },
  {
    path: 'showUserTodoListe',
    component: GetTodoListeBenutzerlistComponent
  },
  {
    path: 'createTodoListe',
    component: CreateTodolisteComponent
  },
  {
    path: 'allTodo',
    component: GetAllTodoComponent
  },
  {
    path: 'Todo',
    component: GetTodoComponent
  },
  {
    path: 'showAllTodoListe',
    component: GetAllTodoListeComponent
  },
  {
    path: 'showTodoListeByBenutzerId',
    component: GetTodoListeBybenutzeridComponent
  },
  {
    path: 'createTodo',
    component: CreateTodoComponent
  },
  {
    path: 'addTodoToTodoListe',
    component: AddTodoToTodoListeComponent
  },
  {
    path: 'deleteTodoFromTodoListe',
    component: DeleteTodoFromTodoListComponent
  },
  {
    path: 'deleteBenutzerFromTodoListe',
    component: DeleteBenutzerFromTodoListComponent
  },
  {
    path: 'addBenutzerToTodoListe',
    component: AddBenutzerToTodoListeComponent
  },
  {
    path: 'register',
    component: RegisterUserComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
