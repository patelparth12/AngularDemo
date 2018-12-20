import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  private _title;
  private _authors;

  constructor(service: AuthorsService) { 
      this._authors = service.getAuthors();
      this._title = (<string[]>this._authors).length + " Authors";
  }

  get title(){
    return this._title;
  }

  get authors(){
    return this._authors;
  }

  ngOnInit() {
  }

}
