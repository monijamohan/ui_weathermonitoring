import {Component,ElementRef,OnInit,ViewChild, Input} from '@angular/core';
import {CommonModule} from '@angular/common'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})

export class ResultComponent {
@Input() public user: any[]=[]
constructor(private modalService: NgbModal){}
ngOnInit() {
  console.log("result",this.user);
  }
}
export interface result {
  location: string,
    latitude: number,
    longitude: number,
    country: string
}