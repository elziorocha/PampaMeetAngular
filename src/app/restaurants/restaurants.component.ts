import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { LucideAngularModule, UtensilsCrossed } from 'lucide-angular';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';

@Component({
  selector: 'app-restaurants',
  imports: [LucideAngularModule, HeaderComponent, FooterComponent, RestaurantCardComponent],
  templateUrl: './restaurants.component.html',
})

export class RestaurantsComponent {
  readonly UtensilsCrossedIcon = UtensilsCrossed;
}
