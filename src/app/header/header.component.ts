import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, BeefIcon, Github } from 'lucide-angular';
@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, RouterModule],
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  readonly BeefIcon = BeefIcon;
  readonly GitIcon = Github;
}
