import { Component, OnInit } from '@angular/core';

export interface declarations {
  type: string;
  explaination: string;
  code: string;
  furtherexplaination1: string;
}

export interface conditions {
  type: string;
  explaination: string;
  code: string;
  code2: string;
  furtherexplaination1: string;
}

export interface parsings {
  type: string;
  explaination: string;
  code: string;
  code2: string;
}

export interface arrays {
  type: string;
  explaination: string;
  code: string;
}

export interface objects {
  type: string;
  explaination: string;
  code: string;
}

export interface objectarrays {
  type: string;
  explaination: string;
  code: string;
}

export interface loops {
  type: string;
  explaination: string;
  code: string;
  furtherexplaination1: string;
}

export interface functions {
  type: string;
  explaination: string;
  code: string;
  furtherexplaination1: string;
  code2: string;
  furtherexplaination2: string;
}

export interface arithmetics {
  type: string;
  explaination: string;
  code: string;
}

export interface databindings {
  type: string;
  explaination: string;
  intantiation: string;
  code: string;
}

export interface exports {
  type: string;
  explaination: string;
  code: string;
}

export interface events {
  type: string;
  explaination: string;
  html: string;
  furtherexplaination1: string;
  code: string;
  furtherexplaination2: string;
}


@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})

export class BasicsComponent implements OnInit {

  Declaration = declaration;
  Condition = condition;
  Parsing = parsing;
  Array = array;
  Object = object;
  Objectarray = objectarray;
  Loops = loop;
  Func = func;
  Arithmetic = arithmetic;
  Databinding = databinding;
  Export = exported;
  Event = event;


  constructor() {
    //conditions
    if (this.x == 10)
      console.log("Condition\nTrue");
    else
      console.log("Condition\nFalse");

    for (let n of this.names) {
      console.log(n + " < looping");
    }
  }

  ngOnInit() {
  }

  x: number = 10;

  //declarations
  str: string = 'this is string';
  num: number = 10;
  bol: boolean = true;

  //parsings string to int - int to string
  parsex1: string = '10';
  parsey1: number = +this.parsex1;

  parsex2: number = 10;
  parsey2: string = String(this.parsex2);



  names: string[] = ['kent', 'john', 'lloyd'];
  nums: number[] = [1, 2, 3];

  named: object = {
    fname: 'kent',
    mname: 'dela cruz',
    lname: 'fueconcillo'
  };

  objarray: object[] = [
    { fname: 'kent' },
    { fname: 'daniel' },
    { fname: 'riel' }
  ];

  //methods
  withoutparameter() {
    alert("too handsome for humanity");
  }

  withparameter(numb: number, stri: string) {
    alert(numb + " " + stri);
  }

  //bindings
  ngmodel: string = '';
  img: string = "https://scontent.fmnl4-5.fna.fbcdn.net/v/t1.0-9/19961222_1740052446022448_1520076539138365916_n.jpg?oh=6e8162f9e3bff101da85d93ff1ab8f91&oe=5A1AFCB0";

  //arithmetic
  basicrand: number;
  advancerand: number;
  brandom() {
    this.basicrand = Math.random();
    return this.basicrand;
  }
  arandom() {
    this.advancerand = Math.random() * (1 * 100);
    return this.advancerand;
  }

  //event
  click() {
    alert("Hello! Angular 4 - single click");
  }
  dbclick() {
    alert("Hello! Angular 4 - double click")
  }

}

const declaration: declarations[] = [
  {
    type: "String",
    explaination: "Declaring str to string",
    code: "str: string = 'this is string';",
    furtherexplaination1: 'Sa kani na instance gi global nato ang atong string para ma cast siya inside method for example like let samplestring = this.str;'
  }, {
    type: "Number",
    explaination: "Declaring num to number",
    code: "num:number = 10;",
    furtherexplaination1: 'Sa kani na instance gi global nato ang atong number para ma cast siya inside method for example like let samplenumber = this.num;'
  }, {
    type: "Boolean",
    explaination: "Declaring bol to boolean",
    code: "bol:boolean = true;",
    furtherexplaination1: 'Sa kani na instance gi global nato ang atong boolean para ma cast siya inside method for example like let sampleboolean = this.bol;'
  }
];

const condition: conditions[] = [
  {
    type: "If and Else statement ",
    explaination: "Lets say *ngIf naka declare na kog x:number = 10; so atong i condition na if true naay True else False sa console log. And if napansin ninyu wala na ang {} after condition kay optional na siya.",
    code: "if (this.x == 10) console.log('True');",
    code2: "else console.log('False');",
    furtherexplaination1: 'Sa diri na way nag condition ta sulod sa atong component.'
  }, {
    type: "Basic *ngIf",
    explaination: "Nag declare ko x:number=10. Then if existing si x mo prompt si found else kung wa pa na declare mo not found siya",
    code: "<div *ngIf='x'>Found</div>",
    code2: "<div *ngIf='!x'>Not found</div>",
    furtherexplaination1: 'Sa diri dapit nag template involve ta kay nag conditioning na ta mismo inside sa atong html'
  }, {
    type: "Advance *ngIf",
    explaination: "Continuation sa basic *ngIf. Sa diri na part nag if else condition ta regarding nag gamit tag <ng-template> na directive.",
    code: "<div *ngIf='x; then templateTrue else templateFalse'></div>",
    code2: "<ng-template #templateTrue>Found</ng-template> <ng-template #templateFalse>Not Found</ng-template>",
    furtherexplaination1: 'Sa diri dapit nag template involve ta kay nag advance conditioning na ta mismo inside sa atong html na if true then template else template'
  }
];

const parsing: parsings[] = [
  {
    type: "Parsing String to Number",
    explaination: "So far mao ni ang pinaka the best and easy way na conversion sa angularjs. By adding +.",
    code: "parsex: string = '10';",
    code2: "parsey: number = +this.parsex;",
  },
  {
    type: "Parsing Number to String",
    explaination: "Para ma parse number to string kailngan nato ang String() function na built in na daan.",
    code: "parsex2: number = 10;",
    code2: "parsey2: string = String(this.parsex2);",
  }
];

const array: arrays[] = [
  {
    type: "Array of String",
    explaination: "Creating a string array",
    code: "names:string[] = ['kent','john','lloyd']",
  },
  {
    type: "Array of Numbers",
    explaination: "Creating a number array",
    code: "nums:number[] = [1,2,3];",
  }
];

const object: objects[] = [
  {
    type: "Object",
    explaination: "Creating object",
    code: "named:object = { fname: 'kent', mname: 'dela cruz', lname: 'fueconcillo'};",
  }
];

const objectarray: objectarrays[] = [
  {
    type: "Object Arrays",
    explaination: "Creating object array",
    code: "objarray: object[] = [{ fname: 'kent' }, { fname: 'daniel' }, { fname: 'riel' }];",
  }
];

const loop: loops[] = [
  {
    type: 'Basic looping using for not *ngFor',
    explaination: 'Diri dapita kay basic looping inside component. Dili pa to diri mao parihas atong ng-repeat sa angular 1 ug *ngFor sa angular 2 / 4',
    code: 'for (let n of this.names) { console.log(n + " < looping"); }',
    furtherexplaination1: 'Sa diri na part nag looping pa ta inside sa atong component.'
  }, {
    type: 'Array Looping *ngFor',
    explaination: 'Referring to array tutorial.',
    code: '<ul class=""> <li *ngFor="let name of names"> {{name}} </li> </ul>',
    furtherexplaination1: 'Sa diri na part nag array looping na ta with template involved. '
  }, {
    type: 'Object Array Looping *ngFor',
    explaination: 'Referring to Object Array tutorial.',
    code: '<ul class=""> <li *ngFor="let objarr of objarray"> {{objarr.fname}} </li> </ul>',
    furtherexplaination1: 'Sa diri na part nag object looping na ta with template involved '
  }, {
    type: 'Object Array Looping *ngFor and getting its index',
    explaination: 'Referring to Object Array tutorial ug need kuhaon ang iyang index.',
    code: '<ul class=""> <li *ngFor="let objarr of objarray;let in = index;"> {{in}} {{objarr.fname}} </li> </ul>',
    furtherexplaination1: 'Sa diri na part nag Object Array looping na ta with template involved '
  }
];

const func: functions[] = [
  {
    type: 'Basic function',
    explaination: 'Basic function once mag click sa button.',
    code: '<button (click)="example()"> try me </button>',
    furtherexplaination1: 'Sa diri dapit nag buhat lang kog sample function with combination of click event',
    code2: 'withoutparameter() { alert("too handsome for humanity"); }}',
    furtherexplaination2: 'after ana mo trigger si alert then mo display too handsome for humanity. '

  }, {
    type: 'Advance function',
    explaination: 'Mao na ni na function na naa nay parameter.',
    code: '<button (click)="example(10,"kent")">try me</button>',
    furtherexplaination1: 'Sa diri dapit nag buhat lang kog sample function with combination of click event',
    code2: 'withparameter(numb:number, stri:string) { alert(numb + " " + stri); }',
    furtherexplaination2: 'sa diri na dapita is naa nay parameter which is number and string.'

  }
];

const arithmetic: arithmetics[] = [
  {
    type: 'Arithmetic inside binding',
    explaination: 'Basic arithmetic inside sa binding so far para sa akoa mao ni ang best way to do arithmetic operations',
    code: '{{1 + 1}} , {{1 - 1}} , {{1 * 1}} , {{1 / 1}}'
  }, {
    type: 'Basic Math Random',
    explaination: 'Kanang gusto ka mag generate ug random numbers',
    code: 'this.rand:number=Math.random();'
  }, {
    type: 'Advance Math Random',
    explaination: 'Kanang gusto ka mag generate ug random numbers pero naay limit ex. 1-100 . regarding kung aha makita tanan function here`s the link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random',
    code: 'this.advancerand = Math.random() * (1 * 100);'
  }
];

const databinding: databindings[] = [
  {
    type: "Two-way Data Binding",
    explaination: "Data binding gamit ang ngModel sa angular 4. WARNING: i import sa ang library import { FormsModule, ReactiveFormsModule } from '@angular/forms'; then i butang ang FormsModule ug ReactiveFormsModule inside imports",
    intantiation: "ngmodel: string = '';",
    code: '<input type="text" class="" [(ngModel)]="ngmodel"> {{ngmodel}}'
  }, {
    type: "Property Binding",
    explaination: "Daghay way para ma bind ang src sa image like [src], src='{{}}' ug bind-src='' pero mas prefer nako ang src='{{}}' old but gold.",
    intantiation: "img: string = 'https://scontent.fmnl4-5.fna.fbcdn.net/v/t1.0-9/19961222_1740052446022448_1520076539138365916_n.jpg?oh=6e8162f9e3bff101da85d93ff1ab8f91&oe=5A1AFCB0';",
    code: '<img src="{{img}}" height="50" >'
  }
];

const exported: exports[] = [
  {
    type: "Interface",
    explaination: "string",
    code: "export interface exports { type: string; explaination: string; code: string; }"
  }, {
    type: "Class",
    explaination: "string",
    code: "export class exports { type: string; explaination: string; code: string; }"
  }

];

const event: events[] = [
  {
    type: 'On Click',
    explaination: 'On click event',
    html: '<button (click)="click()"> On click event </button>',
    furtherexplaination1: 'Sa dri dapita sa atong html nag buhat sa kog button para mo trigger sa akong on click na event',
    code: "click(){ alert('Hello! Angular 4'); }",
    furtherexplaination2: 'Then sa akong function nag buhat sad kog sample alert para naa lay mo prompt once akong i press ang On click event',
  }, {
    type: 'Double click',
    explaination: 'double click event',
    html: '<button (dblclick)="dbclick()"> Double click event </button>',
    furtherexplaination1: 'Sa dri dapita sa atong html nag buhat sa kog button para mo trigger sa akong double click na event',
    code: "dbclick(){ alert('Hello! Angular 4'); }",
    furtherexplaination2: 'Then sa akong function nag buhat sad kog sample alert para naa lay mo prompt once akong i press ang Double click event',
  }

];