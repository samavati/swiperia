import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwiperiaDirective } from '../../../../packages/swiperia-angular/src';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SwiperiaDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';

  handleSwipeLeft(e){
    console.log(e)
  }
}
