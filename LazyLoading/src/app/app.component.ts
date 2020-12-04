import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav ngClass="'menu'">
        <ul>
          <li><a routerLink="/company" routeLinkActive="active">Company</a></li>
          <li><a routerLink="/person" routeLinkActive="active">Person</a></li>
          <li><a routerLink="/contactus" routeLinkActive="active">Contact Us</a></li>
        </ul>
    </nav>
    <hr color="red">
    <div [ngClass]="'partent-container'">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'LazyLoading';
  constructor() {
  }
}
