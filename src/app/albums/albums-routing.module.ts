import { Routes } from "@angular/router";
import { SearchComponent } from "../search/search.component";
import { AlbumComponent } from "./album/album.component";
import { HomeComponent } from "./home/home.component";

export const cardDeckRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'people/:id/:id2',
    component: AlbumComponent
  }
];