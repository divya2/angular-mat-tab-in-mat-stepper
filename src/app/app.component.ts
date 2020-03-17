
import {Component, ViewEncapsulation, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class AppComponent  {
  stepIndex: number = 0;
  isLinear = false;
  multipleTab = true;
  stepper1= true;
  
  cambiaStep(e) {
    this.stepIndex = e.selectedIndex
  }

}

