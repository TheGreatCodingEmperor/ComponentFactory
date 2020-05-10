import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ViewChildren, ViewContainerRef, QueryList, Input } from '@angular/core';
import { TemplateComponent } from '../template/template.component';

@Component({
  selector: 'app-div',
  template:`
  <div>
  hello
    <ng-container #container *ngFor="let item of group"></ng-container>
  </div>
  `,
  styleUrls: ['./div.component.css']
})
export class DivComponent extends TemplateComponent implements OnInit {
  @Input() containers;

  constructor(cdref:ChangeDetectorRef) { 
    super(cdref);
  }

  ngOnInit() {
    this.containers = this.localContainers;
    console.log('debug div');
    console.log(this.containers);
  }

}
