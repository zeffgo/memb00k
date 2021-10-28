import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { data, Person } from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  people: Person[] = [];
  people$ = new BehaviorSubject<Person[]>(this.people);

  constructor() {
    this.people$.next(data.people);
  }
}
