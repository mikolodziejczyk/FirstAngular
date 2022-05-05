import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { LocationComponent } from './location/location.component';



// define routes here
const routes: Routes = [
  { path: '', redirectTo: 'startPage', pathMatch: 'full' },
  { path: 'startPage', component: StartPageComponent },
  { path: 'location/:locationId', component: LocationComponent }
];

// create the routing module here
export const routing = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });
