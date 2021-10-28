import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
    year: new FormControl(0),
  });

  searchResults: string[] = [];

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  onSearchSubmit(f) {
    this.data.people.forEach(p => {
      p.images.forEach(img => {
        let found;
        const tpl = `
          <p>Photo Name: {{imgname}}<p>
          <p>Year: {{yr}}<p>
          <p>Photo Annotation: {{desc}}<p>
        `;
        let result;

        if (img.metas.year === f.value.year) {
          result = tpl.replace('{{yr}}', `<b>${f.value.year}`);
          found = true;
        }

        const re = new RegExp(`${f.value.name}|${f.value.country}|${f.value.city}`);
        result = tpl.replace(re, tpl);
        
        if (result !== tpl) {
          this.searchResults.push(result);
        }
      });
    });
  }

}
