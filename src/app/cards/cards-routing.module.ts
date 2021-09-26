import { Routes } from "@angular/router";
import { CardDeckComponent } from "./card-deck/card-deck.component";

export const cardDeckRoutes: Routes = [
  {
    path: 'people/:id',
    component: CardDeckComponent
  }
];