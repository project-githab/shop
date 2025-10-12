import {Component, DoCheck, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgOptimizedImage, NgStyle} from '@angular/common';
import {Router} from '@angular/router';
import {CSideBar} from '../c-side-bar/c-side-bar';
import {Burger} from '../_directives/side-bar/burger';
import {ClickOutside} from '../_directives/click_outside/click-outside';

@Component({
  selector: 'app-c-header',
  imports: [
    FormsModule,
    NgOptimizedImage,
    NgStyle,
    CSideBar,
    Burger,
    ClickOutside
  ],
  templateUrl: './c-header.html',
  styleUrl: './c-header.css'
})
export class CHeader implements OnInit, DoCheck{



  /**
   * Показывает или скрывает кнопку очистить на поле ввода input search
   */
  isVisible = false;

  /**
   * Минимальное количество вводимых символов в input search
   */
  inputMin: number = 3;

  /**
   * Максимальное количество вводимых символов в input search
   */
  inputMax: number = 100;

  /**
   * Данный из input search
   */
  valueInput: string = '';


  bgColorHome: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.router.url;
    if (this.router.url === "/") {
      this.bgColorHome = '#ff5500';
    }

  }

  /**
   * Метод очистки input search от данных
   */
  clearInputSearch(): void {

    /**
     * Очищает input search от данных
     */
    this.valueInput = '';
  }


  isActive: boolean = false;
  clickButtonBurger() {
    this.isActive = !this.isActive;
  }

  deactivateBurger() {
    this.isActive = false;
    console.log('Клик вне элемента. isActive:', this.isActive);
}


  /**
   * Метод инициализируется когда происходят какие-то изменения, в данном случаи это в Input
   */
  ngDoCheck(): void {

    /**
     * Проверяем есть ли данные в input search. Если пусто, то {@link isVisible} true и кнопка для очистки input search исчезает. Если не пусто, то {@link isVisible} принимает значение false и кнопка для очистки input search появляется.
     */
    this.isVisible = this.valueInput === '';

  }




}
