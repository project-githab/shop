import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CHeader} from './c-header/c-header';

@Component({
  selector: 'app-root',
  imports: [
    CHeader
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shop');
}
