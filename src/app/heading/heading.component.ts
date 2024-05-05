import { Component } from '@angular/core';
import { MapComponent } from '../map/map.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [MapComponent,RouterModule],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent {

}
