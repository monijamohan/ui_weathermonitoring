import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MyserviceService } from '../services/myservice.service';
import { MatToolbar} from '@angular/material/toolbar'
import { MatIconButton} from '@angular/material/button'
import { MatIcon} from '@angular/material/icon'
import { HttpParams } from '@angular/common/http';
import { FormChildComponent } from '../form-child/form-child.component';
import { MapComponent } from '../map/map.component';



@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule,MatToolbar,MatIconButton,MatIcon,FormChildComponent,MapComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent  {
  text: string = '';
  public locationOptions: locationOptions[] = [];
  
  constructor(private myservice: MyserviceService) {}
  onSubmit() {}
  onSearchInput(text: string) {
    if (text) {
      // Make the HTTP request
     this.myservice.getlocation(text).subscribe((response) => {
          // Extract location names from the response
          this.locationOptions = response
          console.log("Search result",this.locationOptions)
        });
    } else {
      console.log("text",this.text)
      // Clear the location options when the search query is less than 3 characters
      this.locationOptions = [];
    }
  }

}
export interface locationOptions {
  location: string,
    latitude: number,
    longitude: number,
    country: string
}