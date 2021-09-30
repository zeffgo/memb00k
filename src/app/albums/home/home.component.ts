import { Component, OnInit } from '@angular/core';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  people = data.people.map(p => ({link: `people/${p.id}`, name: p.name, albums: p.albums}));
  activePerson;

  constructor() { }

  ngOnInit() {
  }

  onClickPerson(index) {
    this.activePerson = this.activePerson === index ? null : index;
  }

}
