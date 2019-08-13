import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  books: object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.myMethod();
    this._http.getBook().subscribe(data =>{
      this.books = data;
      console.log('listCompo books: ',this.books);
    });

  }

}
