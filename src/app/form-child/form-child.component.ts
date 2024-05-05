import { Component, Input, ElementRef,viewChild, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule} from '@angular/material/select';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder  } from '@angular/forms';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MyserviceService } from '../services/myservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResultComponent } from '../result/result.component';
@Component({
  selector: 'app-form-child',
  standalone: true,
  imports: [FormsModule,CommonModule, ReactiveFormsModule,MatSelectModule,MatDatepickerModule,
    MatNativeDateModule,ResultComponent],
  templateUrl: './form-child.component.html',
  styleUrl: './form-child.component.css'
})
export class FormChildComponent {
  loc: locationOptions[] = [];
  constructor(private formBuilder: FormBuilder,private myservice:MyserviceService,private modalService: NgbModal){

  }
  checkoutForm = this.formBuilder.group({
    "location": "Sollentuna",
  "latitude": 59.42804,
  "longitude": 17.95093,
  "min_temperature": 7.95093,
  "max_temperature": 25.95093,
  "start_date": "2024-04-30",
  "end_date": "2024-05-03"
  });
  

  submitForm(): void {
    this.myservice.addPost(this.checkoutForm.value).subscribe(
      data => {
       console.log(data)
       sessionStorage.setItem('key', data);
       this.openPopup(data)
    }
    )
      
      console.warn('Your order has been submitted', this.checkoutForm.value);
    
  }
profileForm: FormGroup | undefined;
@Input() item: locationOptions[] = []
selectedlatitude:number= 59.42804
selectedlongitude:number= 17.95093
openPopup(data:any) {
  const modalRef = this.modalService.open(ResultComponent)
  modalRef.componentInstance.user = data
}
}
export interface locationOptions {
  location: string,
    latitude: number,
    longitude: number,
    country: string
}