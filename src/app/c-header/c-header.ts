import {Component, DoCheck} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-c-header',
  imports: [
    FormsModule
  ],
  templateUrl: './c-header.html',
  styleUrl: './c-header.css'
})
export class CHeader implements DoCheck{



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


  /**
   * Метод очистки input search от данных
   */
  clearInputSearch(): void {

    /**
     * Очищает input search от данных
     */
    this.valueInput = '';
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
