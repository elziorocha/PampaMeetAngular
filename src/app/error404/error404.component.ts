import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { LucideAngularModule, CogIcon } from 'lucide-angular';

@Component({
  selector: 'app-error404',
  imports: [LucideAngularModule],
  templateUrl: './error404.component.html',
})

export class Error404Component {

  constructor(private location: Location) { }

  voltarPagina() {
    this.location.back();
  }

  readonly CogIcon = CogIcon;
}
