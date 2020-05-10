import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentRoutingModule } from './dynamic-component-routing.module';
import { DynamicComponentDirective } from './dynamic-component.directive';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { TemplateComponent } from './template/template.component';
import { DivComponent } from './div/div.component';


@NgModule({
  declarations: [DynamicComponentDirective, AComponent, BComponent, CComponent, DynamicComponentComponent, TemplateComponent, DivComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    DynamicComponentRoutingModule
  ],
  entryComponents:[
    AComponent,
    BComponent,
    CComponent,
    DivComponent
  ],
  exports:[
    DynamicComponentComponent
  ]
})
export class DynamicComponentModule { }
