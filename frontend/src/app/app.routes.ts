import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { ImmigrationComponent} from './immigration/immigration.component';
import { HomeSearchPageComponent} from './home-search-page/home-search-page.component';
import { SettleInPageComponent} from './settle-in-page/settle-in-page.component';
import { FamilySupportPageComponent } from './family-support-page/family-support-page.component';
import { InterculturalServicePageComponent } from './intercultural-service-page/intercultural-service-page.component';
import { IndividualNeedsPageComponent } from './individual-needs-page/individual-needs-page.component';
import { YourAdvantagesPageComponent } from './your-advantages-page/your-advantages-page.component';



export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'ourcompany', component: AboutCompanyComponent },
  { path: 'immigration', component: ImmigrationComponent },
  { path: 'homesearch', component: HomeSearchPageComponent },
  { path: 'settle-in', component: SettleInPageComponent },
  { path: 'family-support', component: FamilySupportPageComponent },
  { path: 'intercultural-service', component: InterculturalServicePageComponent },
  { path: 'individual-needs', component: IndividualNeedsPageComponent },
  { path: 'your-advantages', component: YourAdvantagesPageComponent }

  ];
