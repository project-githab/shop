import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutside {

  @Output() clickOutside = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {
  }

  // 1. Слушаем событие 'click' на всем документе
  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: EventTarget | null) {
    if (!targetElement) {
      return;
    }

    // 2. Проверяем, произошел ли клик внутри хост-элемента
    const clickedInside = this.el.nativeElement.contains(targetElement);

    // 3. Если клик был снаружи (clickedInside === false), испускаем false
    if (!clickedInside) {
      // Передаем булево значение 'false'
      this.clickOutside.emit(false);
    }
  }

}
