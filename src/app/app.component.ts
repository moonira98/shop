import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstComponent } from './my-first/my-first.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyFirstComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'online-shop';
}
