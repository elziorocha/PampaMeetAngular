import { Component } from '@angular/core';
import { LucideAngularModule, BeefIcon } from 'lucide-angular';
@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  readonly BeefIcon = BeefIcon;
}
