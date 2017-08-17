import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


export interface httprequests {
  type: string;
  explaination: string;
  code: string;
  code2: string;
}

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.scss']
})
export class AdvanceComponent implements OnInit {
  Httprequestget = httprequest;

  //http
  results: string[];
  displayedColumns = ['userId', 'userName', 'progress', 'color'];

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  getData() {
    this.http.get('https://www.w3schools.com/angular/customers.php',).subscribe(data => {
      this.results = data['records'];
      console.log(this.results);
    }), (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('An error occurred:', err.error.message);
      } else {
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
    };
  }

  putData(username, password) {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', username);
    urlSearchParams.append('password', password);
    let body = urlSearchParams.toString();
    this.http
      .post('https://www.w3schools.com/angular/customers.php', body, {
        // headers: new HttpHeaders().set('Content-Type', 'application/json'), //python
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'), //php
      })
      .subscribe(data => {
        alert('naka connect ta sa w3schools GREAT');
      }, error => {
        console.log(JSON.stringify(error.json()));
      }
      );
  }

  getTxt() {
    alert("coming soon . . . ");
  }
}

const body = { name: 'Brad' };

const httprequest: httprequests[] = [
  {
    type: 'Http Request Get',
    explaination: 'Una sa lahat i import sa nato ang library and i butang where in aha na locate imung component. Ibutang ni na library import { HttpClient, HttpErrorResponse } from "@angular/common/http";.And gusto nako naay live na api so sa w3schools nako kuhaon https://www.w3schools.com/angular/customers.php',
    code: 'constructor(private http: HttpClient) {}',
    code2: "this.http.get('https://www.w3schools.com/angular/customers.php').subscribe(data => { this.results = data['records']; console.log(this.results); })"
  }, {
    type: 'Http Request Post',
    explaination: 'Same ra sa HTTP GET pero kita na mismo naga pasa sa data. WARNING di mo dawat si w3schools ug POST data due sa ilang restrictions.',
    code: "let urlSearchParams = new URLSearchParams(); urlSearchParams.append('username', username); urlSearchParams.append('password', password); let body = urlSearchParams.toString();",
    code2: "this.http.post('https://www.w3schools.com/angular/customers.php', body, { headers: new HttpHeaders().set('Content-Type', 'application/json'), }) .subscribe( . . . );"
  }, {
    type: 'Http Request Json',
    explaination: 'Coming soon . . . .',
    code: "Coming soon . . . .",
    code2: "Coming soon . . . ."
  }
]