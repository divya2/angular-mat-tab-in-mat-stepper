import { Component, Input } from '@angular/core';

@Component({
  selector: 'stepper-component',
  template: `<mat-tab-group dynamicHeight [(selectedIndex)]="activeTabIndex">
	<mat-tab>
		<ng-template mat-tab-label>tab1</ng-template>
		<div>
			<h1>First tab</h1>
		</div>
	</mat-tab>
  
	<mat-tab *ngIf="stepper">
		<ng-template mat-tab-label>tab2</ng-template>
		<div>
			<h1>Second tab </h1>
		</div>
	</mat-tab>

	<mat-tab *ngIf="stepper">
		<ng-template mat-tab-label>tab3</ng-template>
		<div>
			<h1>Third tab</h1>
		</div>
	</mat-tab>
</mat-tab-group>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class StepperComponent {
  activeTabIndex = 0;
  @Input() stepper;
}
