import { Component, Inject, OnInit } from '@angular/core';
import PDisplayFilms from 'src/app/ports/p-display-films';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html'
})
export class FilmsListComponent implements OnInit {

  constructor(@Inject('PDisplayFilms') public filmsDisplayer: PDisplayFilms) { }

  ngOnInit(): void {
    this.filmsDisplayer.askFilmsList().subscribe();
  }

  deleteFilm(id: number){
    this.filmsDisplayer.askFilmDeletion(id).subscribe();
  }

}
