import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


export interface httprequests {
  type: string;
  explaination: string;
  code: string;
  furtherexplaination1: string;
  code2: string;
  furtherexplaination2: string;
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

export interface templates {
  type: string;
  explaination: string;
  code: string;
  furtherexplaination1: string;
  soutput: string;
}

export interface styles{
  type: string;
  explaination: string;
  code: string;
  furtherexplaination1: string;
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
  Template = template;
  Style = style;
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
    furtherexplaination1: 'Sa kani na code kay gi private ang HttpCient. Pwede ra sad mag pubic pero ma prefer nako ang private',
    code2: "this.http.get('https://www.w3schools.com/angular/customers.php').subscribe(data => { this.results = data['records']; console.log(this.results); })",
    furtherexplaination2: 'Mao ni akong ginagamit na code para matawag ang api. And gina anad sad nako na kung kuhaon is GET and kung mag hatag is POST.'
  }, {
    type: 'Http Request Post',
    explaination: 'Same ra sa HTTP GET pero kita na mismo naga pasa sa data. WARNING di mo dawat si w3schools ug POST data due sa ilang restrictions.',
    code: "let urlSearchParams = new URLSearchParams(); urlSearchParams.append('username', username); urlSearchParams.append('password', password); let body = urlSearchParams.toString();",
    furtherexplaination1: 'Sa kani na code ako sang gi pang declare tanan after ana i cast nako tanan sa string para matawag sa akong body kay ang body kay mo dawat lang ug string sa akong na hibal.an',
    code2: "this.http.post('https://www.w3schools.com/angular/customers.php', body, { headers: new HttpHeaders().set('Content-Type', 'application/json'), }) .subscribe( . . . );",
    furtherexplaination2: 'after ana ako nang i post ang body gamit ang http.post then i set ang headers sa certain type which is sa akong gi gamit karun kay json after ana ang subscribe kay pwede nimo i condition like sucess and error.'
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
    type: 'Declarations',
    explaination: 'Listahan sa component , directives, pipes na na belong sa kani na module',
    code: 'declarations: [AppComponent,BasicsComponent,AdvanceComponent,PushNotificationComponent,]',
    furtherexplaination1: 'Regarding sa code above. Akong gipang tawag ang akong component ug isa ka directive na na belong sa akong module',
    code2: '@NgModule({declarations: [AppComponent,BasicsComponent,AdvanceComponent,PushNotificationComponent,]})',
    furtherexplaination2: 'so ingon ani ang pag implement sa code above',
    soutput: '@NgModule({ declarations: [AppComponent,BasicsComponent,AdvanceComponent,PushNotificationComponent,], imports: [ .... ], providers: [], bootstrap: [AppComponent] })'
  }, {
    type: 'Imports',
    explaination: 'Tanang module na gitawag nimo dapat nato i declate sa imports',
    code: 'import {MdButtonModule, MdCheckboxModule} from "@angular/material";',
    furtherexplaination1: 'sa kani na code gi tawag nako ang classes inside sa @angular/material',
    code2: '@NgModule({ imports: [MdButtonModule, MdCheckboxModule],})',
    furtherexplaination2: 'sa code above ako nang gi declare ang class na MdButtonModule ug MdCheckboxModule para ma tawag na nako ang api sa akong module.',
    soutput: '@NgModule({ declarations: [ .... ], imports: [ MdButtonModule, MdToolbarModule ], providers: [], bootstrap: [AppComponent] })'
  }, {
    type: 'Bootstrap',
    explaination: 'Mao ni ang root element sa akong application',
    code: 'bootstrap: [AppComponent]',
    furtherexplaination1: 'akong gi butang ang root para ma bootstrap siya sa angular',
    code2: '@NgModule({ bootstrap: [AppComponent] })',
    furtherexplaination2: 'ingon ani pag implement sa code above',
    soutput: '@NgModule({ declarations: [ .... ], imports: [ .... ], providers: [], bootstrap: [AppComponent] })'
  }
];

const template: templates[] = [
  {
    type: 'Inline template',
    explaination: 'Template inside sa @component',
    code: ' template: `<p>some template</p>`,',
    furtherexplaination1: 'nag template ko sulod sa akong @component and instead "" the way gamiton siya is ` ` ',
    soutput: "@Component({ selector: 'app-root', template: `<p>some template</p>`, styleUrls: ['./app.component.scss'],})"
  },{
    type: 'External template',
    explaination: 'Template outside na sa @component',
    code: "templateUrl: './app.component.html',",
    furtherexplaination1: 'if na pansin ninyu nag lahi ang pag implement instead template nahimong templateUrl kay mao ni ang way para ma access ni angular ang external links',
    soutput: "@Component({ selector: 'app-root',templateUrl: './app.component.html',styleUrls: ['./app.component.scss'],})"
  }
];

const style: styles[] = [
  {
    type: 'Inline css / scss',
    explaination: 'Style inside sa @component',
    code: "styles: ['.primary {color: red}']",
    furtherexplaination1: 'nag styles ko sulod sa akong @component and instead "" the way gamiton siya is ` ` ',
    soutput: "@Component({ selector: 'app-root', templateUrl: './app.component.html', styles: ['.primary {color: red}'], })"
  },{
    type: 'External css / scss',
    explaination: 'Style outside na sa @component',
    code: "styleUrls: ['./app.component.scss'],",
    furtherexplaination1: 'if na pansin ninyu nag lahi ang pag implement instead styles nahimong styleUrls kay mao ni ang way para ma access ni angular ang external stylesheet',
    soutput: "@Component({ selector: 'app-root',templateUrl: './app.component.html',styleUrls: ['./app.component.scss'],})"
  }
];

