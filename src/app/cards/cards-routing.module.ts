import { Routes } from "@angular/router";
import { CardDeckComponent } from "./card-deck/card-deck.component";
import { HomeComponent } from "./home/home.component";

export const cardDeckRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'people/:id',
    component: CardDeckComponent
  }
];