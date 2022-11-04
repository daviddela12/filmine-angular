import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { MessagesComponent } from './messages/messages.component';
import { FilmsDisplayer } from '../domain/films-displayer';
import { FilmInMemoryAdapterService } from '../adapters/film-in-memory-adapter.service';
import { MessagesAdapterService } from '../adapters/messages-adapter.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../adapters/in-memory-data-service.service';
import { FilmDetailsDisplayer } from '../domain/film-details-displayer';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesDisplayer } from '../domain/messages-displayer';

@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
    FilmDetailsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    {provide: 'PDisplayFilms', useClass: FilmsDisplayer},
    {provide: 'PDisplayFilmDetail', useClass: FilmDetailsDisplayer},
    {provide: 'PDisplayMessages', useClass: MessagesDisplayer},
    {provide: 'PManageFilms', useClass: FilmInMemoryAdapterService},
    {provide: 'PManageMessages', useClass: MessagesAdapterService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
