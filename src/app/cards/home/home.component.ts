import { Component, OnInit } from '@angular/core';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  people = [
    {link: 'people/1', name: 'David Blank', albums: data.people[0].albums},
    {link: 'people/2', name: 'Alex Sobolevsky', albums: data.people[1].albums}
  ];
  activePerson;

  constructor() { }

  ngOnInit() {
  }

  onClickPerson(index) {
    this.activePerson = this.activePerson === index ? null : index;
  }

}
