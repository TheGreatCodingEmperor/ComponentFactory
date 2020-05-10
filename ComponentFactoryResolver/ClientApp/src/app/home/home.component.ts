import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { DynamicComponentDirective } from '../dynamic-component/dynamic-component.directive';
import { DynamicComponentService, FormlyStruct } from '../dynamic-component/dynamic-component.service';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit{
  selectedComponentName: string;
  // @ViewChild('container', <any>{ read: ViewContainerRef, static: true }) dynamicComponent: ViewContainerRef;
  @ViewChildren('formly',<any>{read:ViewContainerRef,static:true}) containers: QueryList<ViewContainerRef>;
  form: FormGroup;
  formControl: AbstractControl;
  group = {};
  struct: FormlyStruct[] = [{
    id:'b',
    type: 'b',
    key: 'name',
    formControl: null
  }, {
    id:'a',
    type: 'a',
    key: 'email',
    formControl: null
  },{
    id:'c',
    type: 'c',
    key: 'bool',
    formControl: null,
    group:[
      {
        id:'b',
        type: 'b',
        key: 'name',
        formControl: null
      }
    ]
  }
  ];
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private dinamicService: DynamicComponentService,
    private formBuilder: FormBuilder
  ) {
    let keysArray = this.struct.map(i => i['key']);
    let keys = {};
    for (let item of keysArray) {
      keys[item] = [];
    }
    this.form = this.buildGroup(keys);
  }

  ngAfterViewInit(){
    console.log("container");
    console.log(this.containers);

    let n = this.struct.length;
    for(let i=0;i<n;i++){
      this.displayComponent(this.struct[i],i);
    }
  }

  buildGroup(keys: object) {
    return this.formBuilder.group(keys);
  }

  getFormControl(key: string) {
    return this.form.get(key);
  }

  displayComponent(formlyStruct: FormlyStruct,index:number) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.dinamicService.getComponent(formlyStruct.type));

    console.log("debug display");
    console.log(componentFactory);

    const viewContainerRef = this.containers.toArray()[index];
    console.log(viewContainerRef);

    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance['form'] = this.getFormControl(formlyStruct.key);
    // this.formControl = this.form.get('name');
  }
}
