import { Component } from '@angular/core';
import * as moment from 'moment';
import * as d3 from 'd3';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    console.log(moment().format());
    console.log(d3);
  }
}
