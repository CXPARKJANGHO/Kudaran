import {Component} from '@angular/core';
import {setTheme} from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // import ngx-bootstrap4 Theme
    setTheme('bs4');
  }
}
