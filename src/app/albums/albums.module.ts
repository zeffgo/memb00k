import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cardDeckRoutes } from './albums-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './album/album.component';
import { PhotoComponent } from './photo/photo.component';
import { FontToggleComponent } from './album/font-toggle/font-toggle.component';



@NgModule({
  declarations: [AlbumComponent, PhotoComponent, HomeComponent, FontToggleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(cardDeckRoutes)
  ],
  exports: [AlbumComponent]
})
export class AlbumsModule { }
