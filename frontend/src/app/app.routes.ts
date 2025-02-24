import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { ImmigrationComponent} from './immigration/immigration.component';


export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'ourcompany', component: AboutCompanyComponent },
   { path: 'immigration', component: ImmigrationComponent }
  ];
