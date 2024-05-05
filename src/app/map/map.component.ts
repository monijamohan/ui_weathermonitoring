import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import {Component,ElementRef,OnInit,ViewChild} from '@angular/core';
import * as L from 'leaflet';
import { MyserviceService } from '../services/myservice.service';
import { FormComponent } from '../form/form.component';


declare var google:any;
@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
  standalone: true,
  imports: [FormComponent],
})

export class MapComponent implements OnInit{
    private defaultIcon = L.icon({
        iconUrl: 'assets/red_icon.png',
        iconSize: [30, 30], // Adjust these values based on your requirements
      });
    @ViewChild('map',{static:true}) mapElementRef!: ElementRef;
    center = {lat:28.649944593035188,lng: 77.23961776224988}
   
 
    constructor(private myservice: MyserviceService) {
       
    }
    latitude: number | undefined;
    longitude: number | undefined;
    ngOnInit(): void {}
    ngAfterViewInit(){
        this.myservice.getPosts().subscribe(
            (response) => {
              // Assuming the response is an array with at least one object
              if (response.length > 0) {
                console.log('data:', response);
                this.latitude = response[0].latitude;
                this.longitude = response[0].longitude;
                console.log('Latitude:', this.latitude);
                console.log('Longitude:', this.longitude);
                if (this.latitude !== undefined && this.longitude !== undefined) {
                var map = L.map('map', {
                    center: [this.latitude, this.longitude],
                    zoom: 13
                });
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    const defaultLocation = L.marker([this.latitude, this.longitude], {
        icon: this.defaultIcon, // Use your custom icon if desired
      }).addTo(map);
      
      defaultLocation.bindPopup('Default Location');
                
              }
            }
            },
            (error) => {  
              console.error('Error fetching data:', error);
            }
          );
        
    }
    
      
}