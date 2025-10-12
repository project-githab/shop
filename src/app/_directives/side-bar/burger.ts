import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[burgerRotateZ]'
})
export class Burger {

  constructor() { }

  @Input()
  set burgerActive(value: boolean) {
    this.isActive1 = value;
  }

  @HostBinding('class.rotateZ')
  isActive1 = false

}
