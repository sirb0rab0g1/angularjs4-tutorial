import { Component, ViewEncapsulation } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
export class cheatSheet {
  name: string;
  link: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'app';
  finalcs = cs;

  name: string = "Kent Fueconcillo";
  content: string = "Hello! This is all about angular 4 tutorial";
  icon: string = "https://scontent.fceb1-1.fna.fbcdn.net/v/t1.0-9/19961222_1740052446022448_1520076539138365916_n.jpg?oh=213e3372ea9a6687f80fa07822fb3059&oe=59F36FB0";

  constructor(private fb: FacebookService) {

    let initParams: InitParams = {
      appId: '1569442779733042',
      xfbml: true,
      version: 'v2.9'
    };

    fb.init(initParams);

  }
}

const cs: cheatSheet[] = [
  { name: 'Basics', link: 'basic' },
  { name: 'Advance', link: 'advance' }
];
