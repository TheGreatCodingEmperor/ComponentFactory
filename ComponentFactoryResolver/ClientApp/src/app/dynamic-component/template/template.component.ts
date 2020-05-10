import { Component, OnInit, Input, ViewContainerRef, ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormlyStruct } from '../dynamic-component.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  @ViewChildren('container', <any>{ read: ViewContainerRef,  static: false }) localContainers: QueryList<ViewContainerRef>;
  @Input() form:FormControl;
  @Input() group:FormlyStruct[]=[];

  constructor(
    protected cdref:ChangeDetectorRef
  ) { }

}
