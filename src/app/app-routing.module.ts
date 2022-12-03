import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { LoginComponent } from './login/login.component';
import { PlanComponent } from './plan/plan.component';
import { ProfilComponent } from './profil/profil.component';
import { RoomsComponent } from './rooms/rooms.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'plan', component: PlanComponent},
  { path: 'rooms', component: RoomsComponent},
  { path: 'add-event',component: AddEventComponent},
  { path: 'profil',component: ProfilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
