import { Component } from '@angular/core';
import { menuItem } from './menuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shop';
  menu: any[] = [['Chicken Fingers', 'Dinner', 11.99], ['Pizza', 'Dinner', 11.99],
  ['Wings', 'Sides', 11.99], ['Breadsticks', 'Sides', 4.99], ['Cesar Salad', 'Salads', 5.99],
  ['Cinnamon Rolls', 'Dessert', 8.99]];

 

}


