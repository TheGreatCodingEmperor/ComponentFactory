import { Component, OnInit, Input, ChangeDetectorRef, OnChanges, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TemplateComponent } from '../template/template.component';
@Component({
  selector: 'app-b',
  template:`
    <input type="text" [formControl]="form"/>
  `,
  styleUrls: ['./b.component.css']
})
export class BComponent extends TemplateComponent implements OnInit,AfterViewInit {
  constructor(cdref:ChangeDetectorRef) {
    super(cdref);
   }
  ngAfterViewInit(){
    this.cdref.detectChanges();
  }

  ngOnInit() {
  }

}
