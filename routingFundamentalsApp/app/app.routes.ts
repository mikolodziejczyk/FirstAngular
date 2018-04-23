import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ListComponent },
    { path: 'details/:id', component: DetailsComponent }
  ];
  
  // create the routing module here
  export const routing = RouterModule.forRoot(routes);
  