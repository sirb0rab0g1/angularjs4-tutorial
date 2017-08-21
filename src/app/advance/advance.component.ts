import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


export interface httprequests {
  type: string;
  explaination: string;
  code: string;
  furtherexplaination1:string;
  code2: string;
  furtherexplaination2:string;
}

export interface routes {
  type: string;
  explaination: string;
  code: string;
  furtherexplaination1: string;
  code2: string;
  furtherexplaination2: string;
  code3: string;
  furtherexplaination3: string;
}

export interface ngmodules {
  type: string;
  explaination: string;
  code: string;
  furtherexplaination1: string;
  code2: string;
  furtherexplaination2: string;
  soutput: string;
}

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.scss']
})
export class AdvanceComponent implements OnInit {
  Httprequestget = httprequest;
  Routes = route;
  Ngmodules = ngmodule;
  //http
  results: string[];
  displayedColumns = ['userId', 'userName', 'progress', 'color'];

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  getData() {
    this.http.get('https://www.w3schools.com/angular/customers.php', ).subscribe(data => {
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

const httprequest: httprequests[] = [
  {
    type: 'Http Request Get',
    explaination: 'Una sa lahat i import sa nato ang library and i butang where in aha na locate imung component. Ibutang ni na library import { HttpClient, HttpErrorResponse } from "@angular/common/http";.And gusto nako naay live na api so sa w3schools nako kuhaon https://www.w3schools.com/angular/customers.php',
    code: 'constructor(private http: HttpClient) {}',
    furtherexplaination1:'Sa kani na code kay gi private ang HttpCient. Pwede ra sad mag pubic pero ma prefer nako ang private',
    code2: "this.http.get('https://www.w3schools.com/angular/customers.php').subscribe(data => { this.results = data['records']; console.log(this.results); })",
    furtherexplaination2:'Mao ni akong ginagamit na code para matawag ang api. And gina anad sad nako na kung kuhaon is GET and kung mag hatag is POST.'
  }, {
    type: 'Http Request Post',
    explaination: 'Same ra sa HTTP GET pero kita na mismo naga pasa sa data. WARNING di mo dawat si w3schools ug POST data due sa ilang restrictions.',
    code: "let urlSearchParams = new URLSearchParams(); urlSearchParams.append('username', username); urlSearchParams.append('password', password); let body = urlSearchParams.toString();",
    furtherexplaination1:'Sa kani na code ako sang gi pang declare tanan after ana i cast nako tanan sa string para matawag sa akong body kay ang body kay mo dawat lang ug string sa akong na hibal.an',
    code2: "this.http.post('https://www.w3schools.com/angular/customers.php', body, { headers: new HttpHeaders().set('Content-Type', 'application/json'), }) .subscribe( . . . );",
    furtherexplaination2:'after ana ako nang i post ang body gamit ang http.post then i set ang headers sa certain type which is sa akong gi gamit karun kay json after ana ang subscribe kay pwede nimo i condition like sucess and error.'
  }
];

const route: routes[] = [
  {
    type: 'Routing',
    explaination: 'Sa ani na style mao ni ang pinakadali para mag himo og routes sa angularjs 4 kay uban tutorial samukan ko. naa ray duha configuration para ma achieve ni.',
    code: 'const appRoutes: Routes = [ { path: "basic", component: BasicsComponent }, { path: "advance", component: AdvanceComponent },];',
    furtherexplaination1: 'mao na ang i butang sa module.ts ang path kay kung aha nako gusto i route na page and ang component is katong component na gi create nako',
    code2: 'const cs: cheatSheet[] = [ { name: "Basics", link: "basic" }, { name: "Advance", link: "advance" },];',
    furtherexplaination2: 'then after ana need tag constant array same sa taas para didto ra ta mag tawag sa example sa taas. Kay mahulog na siyag interface kung sa JAVA.',
    code3: '<router-outlet></router-outlet>',
    furtherexplaination3: 'Sa kana na directive gi tawag nato ang unsa man na template na gi tawag sa atong router.'
  }
];

const ngmodule: ngmodules[] = [
  {
    type: 'NgModule',
    explaination: 'Kaning NgModule mura nig library declaration kung sa JAVA pa. Kay tungod ani diri nako i pang call ang mga classes inside sa library na akong gusto i tawag.',
    code: 'import {MdButtonModule, MdCheckboxModule} from "@angular/material";',
    furtherexplaination1: 'sa kani na code gi tawag nako ang classes inside sa @angular/material',
    code2: '@NgModule({ imports: [MdButtonModule, MdCheckboxModule],})',
    furtherexplaination2: 'sa code above ako nang gi declare ang class na MdButtonModule ug MdCheckboxModule para ma tawag na nako ang api sa akong system.',
    soutput: '@NgModule({ declarations: [ .... ], imports: [ .... MdButtonModule, MdToolbarModule, .... ], providers: [], bootstrap: [AppComponent] })'
  }
];

