import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenresComponent } from './genres/genres.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';


const routes: Routes = [
  {
    path: 'genres', component: GenresComponent
  },
  {
    path: 'genre/:id', component: MovieListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
