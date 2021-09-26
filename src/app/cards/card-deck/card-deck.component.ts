import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { data, Image } from 'src/assets/data';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss']
})
export class CardDeckComponent implements OnInit {

  isCaptionVisible = true;
  activeImagePath: string;
  person: {id: number, images?: Image[]} = {id: 0, images: []};
  images = this.person.images;
  
  activeCard: {
    path: string;
    caption: string;
  };

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const id = +event.url.split('/').pop();
        const person = data.people.find(p => p.id === id);
        this.person = person;
        
        if (this.person.images.length) {
          this.onClickThumb(this.person.images[0]);
        }
      }
    });
  }

  ngOnInit() {
  }

  onClickThumb(image) {
    this.activeCard = {path: image.path, caption: image.metas.description};
  }

  onSwipe(ev) {
    let newIndex = this.person.images.findIndex(i => i.path === this.activeCard.path) + (ev.deltaX > 0 ? 1 : -1);
    if (newIndex < 0) {
      newIndex = this.person.images.length - 1;
    }
    if (newIndex > this.person.images.length - 1) {
      newIndex = 0;
    }
    this.onClickThumb(this.person.images[newIndex]);
  }

}
