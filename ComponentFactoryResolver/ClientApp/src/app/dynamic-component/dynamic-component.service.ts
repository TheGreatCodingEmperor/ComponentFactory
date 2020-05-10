import { Injectable } from '@angular/core';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { AbstractControl } from '@angular/forms';
import { DivComponent } from './div/div.component';
export interface FormlyStruct{
  id:string,
  type:string,
  key:string,
  formControl:AbstractControl,
  group?:FormlyStruct[]
}

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {
  private components = {
    a:AComponent,
    b:BComponent,
    c:CComponent,
    div:DivComponent
  }
  constructor() { }
  getComponent(name:string){
    console.log(name);
    return this.components[name];
  }
}
