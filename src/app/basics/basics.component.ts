import { Component, OnInit } from '@angular/core';

export class declarations {
  type: string;
  explaination: string;
  code: string;
}

export class conditions {
  type: string;
  explaination: string;
  code: string;
  code2: string;
}

export class parsings {
  type: string;
  explaination: string;
  code: string;
  code2: string;
}

export class arrays {
  type: string;
  explaination: string;
  code: string;
}

export class objects {
  type: string;
  explaination: string;
  code: string;
}

export class objectarrays {
  type: string;
  explaination: string;
  code: string;
}

export class loops {
  type: string;
  explaination: string;
  code: string;
}

export class methods {
  type: string;
  explaination: string;
  code: string;
  code2: string;
}

export class arithmetics {
  type: string;
  explaination: string;
  code: string;
}

export class databindings {
  type: string;
  explaination: string;
  intantiation:string;
  code: string;
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
  Method = method;
  Arithmetic = arithmetic;
  Databinding = databinding;

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

}

const declaration: declarations[] = [
  {
    type: "String",
    explaination: "Declaring str to string",
    code: "str: string = 'this is string';",
  }, {
    type: "Number",
    explaination: "Declaring num to number",
    code: "num:number = 10;",
  }, {
    type: "Boolean",
    explaination: "Declaring bol to boolean",
    code: "bol:boolean = true;",
  }
];

const condition: conditions[] = [
  {
    type: "If and Else statement ",
    explaination: "Lets say *ngIf naka declare na kog x:number = 10; so atong i condition na if true naay True else False sa console log. And if napansin ninyu wala na ang {} after condition becase optional na siya.",
    code: "if (this.x == 10) console.log('True');",
    code2: "else console.log('False');",
  }, {
    type: "Basic *ngIf",
    explaination: "Nag declare ko x:number=10. Then if existing si x mo prompt si found else kung wa pa na declare mo not found siya",
    code: "<div *ngIf='x'>Found</div>",
    code2: "<div *ngIf='!x'>Not found</div>",
  }, {
    type: "Advance *ngIf",
    explaination: "Continuation sa basic *ngIf. Sa diri na part nag if else condition ta regarding nag gamit tag <ng-template> na directive.",
    code: "<div *ngIf='x; then templateTrue else templateFalse'></div>",
    code2: "<ng-template #templateTrue>Found</ng-template> <ng-template #templateFalse>Not Found</ng-template>",
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
  }, {
    type: 'Array Looping *ngFor',
    explaination: 'Referring to array tutorial.',
    code: '<ul class=""> <li *ngFor="let name of names"> {{name}} </li> </ul>',
  }, {
    type: 'Object Array Looping *ngFor',
    explaination: 'Referring to Object Array tutorial.',
    code: '<ul class=""> <li *ngFor="let objarr of objarray"> {{objarr.fname}} </li> </ul>',
  }, {
    type: 'Object Array Looping *ngFor and getting its index',
    explaination: 'Referring to Object Array tutorial ug need kuhaon ang iyang index.',
    code: '<ul class=""> <li *ngFor="let objarr of objarray;let in = index;"> {{in}} {{objarr.fname}} </li> </ul>',
  }
];

const method: methods[] = [
  {
    type: 'Basic method',
    explaination: 'Basic method once mag click sa button. WARNING: regarding sa $events refer sa kani na link https://developer.mozilla.org/en-US/docs/Web/Events then Mouse Events',
    code: '<button (click)="example()"> try me </button>',
    code2: 'withoutparameter() { alert("too handsome for humanity"); }}',
  }, {
    type: 'Advance method',
    explaination: 'Mao na ni na method na naa nay parameter. Keep in mind ang warning sa Basic Method Tutorial',
    code: '<button (click)="example(10,"kent")">try me</button>',
    code2: 'withparameter(numb:number, stri:string) { alert(numb + " " + stri); }',
  }
];

const arithmetic: arithmetics[] = [
  {
    type: 'Arithmetic inside binding',
    explaination: 'Basic arithmetic inside sa binding so far para sa akoa mao ni ang best way to do arithmetic operations',
    code: '{{1 + 1}} , {{1 - 1}} , {{1 * 1}} , {{1 / 1}}'
  }
];

const databinding: databindings[] = [
  {
    type: "Two-way Data Binding",
    explaination: "Data binding gamit ang ngModel sa angular 4. WARNING: i import sa ang library import { FormsModule, ReactiveFormsModule } from '@angular/forms'; then i butang ang FormsModule ug ReactiveFormsModule inside imports",
    intantiation:"ngmodel: string = '';",
    code: '<input type="text" class="" [(ngModel)]="ngmodel"> {{ngmodel}}'
  }, {
    type: "Property Binding",
    explaination: "Daghay way para ma bind ang src sa image like [src], src='{{}}' ug bind-src='' pero mas prefer nako ang src='{{}}' old but gold.",
    intantiation:"img: string = 'https://scontent.fmnl4-5.fna.fbcdn.net/v/t1.0-9/19961222_1740052446022448_1520076539138365916_n.jpg?oh=6e8162f9e3bff101da85d93ff1ab8f91&oe=5A1AFCB0';",
    code: '<img src="{{img}}" height="50" >'
  }
]