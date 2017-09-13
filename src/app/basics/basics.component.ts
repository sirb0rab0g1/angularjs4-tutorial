import { 
  Component, 
  OnInit ,
  Input
 } from '@angular/core';

import { 
  declarations,
  conditions,
  parsings,
  arrays,
  objects,
  objectarrays,
  loops,
  functions,
  arithmetics,
  databindings,
  exportss,
  events,
} from '../basic';

import { 
  declaration,
  condition,
  parsing,
  array,
  object,
  objectarray,
  loop,
  func,
  arithmetic,
  databinding,
  exported,
  event,
} from '../mock-basic';



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
