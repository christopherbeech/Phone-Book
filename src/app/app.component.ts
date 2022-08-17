import { Component } from '@angular/core';
import { PhoneBookComponent } from './phonebook/phonebook.component';

@Component({
  selector: 'pb-root',
  template: `<div>
                <h1>{{title}}</h1>
                <pb-phonebook></pb-phonebook>
              </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Phone Book';
}
