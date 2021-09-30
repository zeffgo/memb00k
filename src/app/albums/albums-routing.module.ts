import { Routes } from "@angular/router";
import { AlbumComponent } from "./album/album.component";
import { HomeComponent } from "./home/home.component";

export const cardDeckRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'people/:id/:id2',
    component: AlbumComponent
  }
];