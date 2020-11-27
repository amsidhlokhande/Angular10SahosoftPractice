import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgClass Example';

  getCssClass(flag: string) {
    let cssClass;
    if (flag === 'mode') {
      cssClass = {
        'one': true,
        'two': false,
        'three': false,
        'four': true
      };
    } else {
      cssClass = {
        'one': false,
        'two': true,
        'three': true,
        'four': false
      };
    }
    return cssClass;
  }
}
