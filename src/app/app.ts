import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CHeader} from './c-header/c-header';
import {CHomeProductList} from './c-home-product-list/c-home-product-list';
import {CFooter} from './c-footer/c-footer';
import {CPagination} from './c-pagination/c-pagination';

@Component({
  selector: 'app-root',
  imports: [
    CHeader,
    CHomeProductList,
    CFooter,
    CPagination
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shop');
}
