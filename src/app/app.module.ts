import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTabsModule} from '@angular/material/tabs';
import { MatStepperModule} from '@angular/material/stepper';
import { MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { StepperComponent } from './stepper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatTabsModule, MatStepperModule, MatButtonModule ],
  declarations: [ AppComponent, StepperComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
