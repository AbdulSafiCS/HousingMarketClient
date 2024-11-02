import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { ListingsComponent } from './listings/listings.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // HomeComponent as the default
  { path: 'cities', component: CitiesComponent },
  { path: 'listings', component: ListingsComponent },
];

export const routing = RouterModule.forRoot(routes);
