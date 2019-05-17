import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalleComponent } from './salle/salle.component';
import { MovieComponent } from './movie/movie.component';
import { ReservationComponent } from './reservation/reservation.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { SeanceComponent } from './seance/seance/seance.component';
import { ConfirmComponent } from './reservation/confirm/confirm.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  {path: "" , component : MovieListComponent},
  {path: "salle/:id", component: SalleComponent},
  {path: "reservation", component: ReservationComponent},
  {path: "seance/:id", component: SeanceComponent},
  {path: "confirmResa", component: ConfirmComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
