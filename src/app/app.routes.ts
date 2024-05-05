import { Routes } from '@angular/router';
import { HeadingComponent } from './heading/heading.component';
import { FormComponent } from './form/form.component';
import { MapComponent } from './map/map.component';
import { ResultComponent } from './result/result.component';


export const routes: Routes = [
    {path:'map',component:FormComponent}
];