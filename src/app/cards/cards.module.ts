import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDeckComponent } from './card-deck/card-deck.component';
import { CardComponent } from './card/card.component';
import { cardDeckRoutes } from './cards-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [CardDeckComponent, CardComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(cardDeckRoutes)
  ],
  exports: [CardDeckComponent]
})
export class CardsModule { }
