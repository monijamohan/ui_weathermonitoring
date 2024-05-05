import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { GoogleMapsModule} from '@angular/google-maps';
import { RouterModule, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';


// Import components, services, and other modules that you have created
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { FormComponent } from './form/form.component';
import { MapComponent } from './map/map.component';
import { MatToolbar} from '@angular/material/toolbar'
import { FormChildComponent } from './form-child/form-child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// Decorate the module with the @NgModule decorator
@NgModule({
  declarations: [ // Declare components, directives, and pipes used within the module
    AppComponent,
    HeadingComponent,
    FormComponent,
    MapComponent

    
  ],
  imports: [ // Import other Angular modules that your application depends on
  RouterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormBuilder,
    GoogleMapsModule,
    MatToolbar,
    FormChildComponent,
    FormGroup,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot([
      { path: 'map', component: FormComponent },
    ])
    // Other modules as needed
  ],
  providers: [ // Provide services that will be injected into components
  provideHttpClient(withFetch()),
  MatDatepickerModule,
    MatNativeDateModule,
    importProvidersFrom([BrowserAnimationsModule])
    // Other services as needed
  ],
  bootstrap: [AppComponent] // Define the root component of the application
})
export class AppModule { } // Define the module class and export it