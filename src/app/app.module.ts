import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { NgxLoadingModule } from 'ngx-loading';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { DiffusionComponent } from './diffusion/diffusion.component';
import { SalleComponent } from './salle/salle.component';
import { ReservationComponent } from './reservation/reservation.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { SeanceComponent } from './seance/seance/seance.component';
import { ConfirmComponent } from './reservation/confirm/confirm.component';
import { LoginComponent } from './user/login/login.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    DiffusionComponent,
    SalleComponent,
    ReservationComponent,
    MovieListComponent,
    SeanceComponent,
    ConfirmComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    NgxLoadingModule.forRoot({}),
    StorageServiceModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
