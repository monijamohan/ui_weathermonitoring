import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//importing componets
import { FormComponent } from './form/form.component';
import { HeadingComponent } from './heading/heading.component';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormComponent,HeadingComponent, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ui';
}
