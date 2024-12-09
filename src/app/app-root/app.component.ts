import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false,
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-app';

  animalInfos = [
    { type: 'Malayan Tiger', count: 787 },
    { type: 'Mountain Gorilla', count: 212 },
    { type: 'Fin Whale', count: 28 },
  ]
}
