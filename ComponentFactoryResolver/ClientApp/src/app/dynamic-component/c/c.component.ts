import { Component, OnInit } from '@angular/core';
import { TemplateComponent } from '../template/template.component';

@Component({
  selector: 'app-c',
  template:`
  <input type="checkbox" [(ngModel)]="value" [formControl]="form"/>
  `,
  styleUrls: ['./c.component.css']
})
export class CComponent extends TemplateComponent {
  value=false;

  constructor() {
    super();
   }

}
