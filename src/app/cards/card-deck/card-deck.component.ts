import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Album, data, Image } from 'src/assets/data';

export const personMock = {
  id: 0,
  albums: [{name: 'mock', description: 'mock', albumId: 0, images: []}]
};
@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss']
})
export class CardDeckComponent implements OnInit {

  isCaptionVisible = true;
  activeImagePath: string;
  person = personMock;
  selectedAlbum: Album = personMock.albums[0];
  
  activeCard: {
    path: string;
    caption: string;
  };

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const [personId, albumId] = event.url.split('/').slice(-2).map(n => +n);
        const person = data.people.find(p => p.id === personId);
        this.person = {
          ...person,
          albums: this.getAlbums(person)
        };
        this.selectedAlbum = this.person.albums.find(a => a.albumId === albumId);
        
        if (this.selectedAlbum.images.length) {
          this.onClickThumb(this.selectedAlbum.images[0]);
        }
      }
    });
  }

  getAlbums({albums, images}) {
    albums.forEach(a => a.images = images.filter(i => i.metas.albums.includes(a.albumId)));
    return albums;
  }

  ngOnInit() {
  }

  onClickThumb(image) {
    this.activeCard = {path: image.path, caption: image.metas.description};
  }

  onSwipe(ev) {
    let newIndex = this.selectedAlbum.images.findIndex(i => i.path === this.activeCard.path) + (ev.deltaX > 0 ? 1 : -1);
    if (newIndex < 0) {
      newIndex = this.selectedAlbum.images.length - 1;
    }
    if (newIndex > this.selectedAlbum.images.length - 1) {
      newIndex = 0;
    }
    this.onClickThumb(this.selectedAlbum.images[newIndex]);
  }

}
