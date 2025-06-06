import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { Error404Component } from './error404/error404.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'restaurantes',
    component: RestaurantsComponent
  },
  {
    path: '**',
    component: Error404Component
  },
];
