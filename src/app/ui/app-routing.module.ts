import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmsListComponent } from './films-list/films-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/films-list', pathMatch: 'full' },
  { path: 'films-list', component: FilmsListComponent },
  { path: 'film-details/:id', component: FilmDetailsComponent },
  { path: 'film-details', component: FilmDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
