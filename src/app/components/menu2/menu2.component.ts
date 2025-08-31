import { Component } from '@angular/core';

@Component({
  selector: 'app-menu2',
  standalone: true,
  imports: [],
  templateUrl: './menu2.component.html',
  styleUrl: './menu2.component.scss'
})
export class Menu2Component {
pizzas = [
    { id: 1, name: 'Маргарита', price: 450 },
    { id: 2, name: 'Пепперони', price: 550 },
    { id: 3, name: 'Четыре сыра', price: 600 },
  ];
}
