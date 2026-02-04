import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../domain/models/film';
import { Location } from '@angular/common';
import PDisplayFilmDetail from '../../application/ports/inbound/p-display-film-details';
import PDisplayFilms from '../../application/ports/inbound/p-display-films';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html'
})
export class FilmDetailsComponent implements OnInit {

  formFilmGroup: FormGroup;
  isLoading: boolean = true;
  idFilm: number;

  constructor(@Inject('PDisplayFilmDetail') public filmDetailDisplayer: PDisplayFilmDetail,
              @Inject('PDisplayFilms') public filmsDisplayer: PDisplayFilms,
              private _route: ActivatedRoute,
              private _formBuilder: FormBuilder,
              private _location: Location) {
    this.formFilmGroup = this._formBuilder.group({
      name: [""],
      description: [""],
    });
    this.idFilm = parseInt(this._route.snapshot.paramMap.get('id')!, 10)
  }

  ngOnInit(): void {
    if ( this.idFilm ){
      this.getFilm()
    } else {
      this.isLoading = false
    }
  }

  getFilm(){
    this.filmDetailDisplayer.askFilmDetail(this.idFilm).subscribe(() => {
      this.formFilmGroup.patchValue({
        name: this.filmDetailDisplayer.film?.name,
        description: this.filmDetailDisplayer.film?.description
      })
      this.isLoading = false
    });
  }

  onSubmit(){
    let filmToUpdate: Film = {
      id: this.filmDetailDisplayer.film?.id ? this.filmDetailDisplayer.film.id : undefined,
      name: this.formFilmGroup.value.name,
      description: this.formFilmGroup.value.description,
    };
    if ( filmToUpdate.id ){
      this.filmDetailDisplayer.askFilmChange(filmToUpdate).subscribe(_ => this._location.back())
    } else {
      this.filmsDisplayer.askFilmCreation(filmToUpdate).subscribe(_ => this._location.back())
    }
  }
}
