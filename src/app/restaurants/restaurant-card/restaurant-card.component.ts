import { Component } from '@angular/core';
import { LucideAngularModule, Hamburger, Pizza, Beer, Star, StarHalf } from 'lucide-angular';

@Component({
  selector: 'app-restaurant-card',
  imports: [LucideAngularModule],
  templateUrl: './restaurant-card.component.html',

})
export class RestaurantCardComponent {
  readonly HamburgerIcon = Hamburger;
  readonly PizzaIcon = Pizza;
  readonly BeerIcon = Beer;
  readonly StarIcon = Star;
  readonly StarHalfIcon = StarHalf;
}
