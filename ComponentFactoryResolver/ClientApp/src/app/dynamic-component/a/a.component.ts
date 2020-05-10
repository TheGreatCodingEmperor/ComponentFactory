import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TemplateComponent } from '../template/template.component';

@Component({
  selector: 'app-a',
  template:`
    <input type="radio" [formControl]="form"/>
  `,
  styleUrls: ['./a.component.css']
})
export class AComponent extends TemplateComponent implements OnInit {

  constructor(
    cdref:ChangeDetectorRef
  ) {
    super(cdref);
   }

  ngOnInit() {
  }

}
