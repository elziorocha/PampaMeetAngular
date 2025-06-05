import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './home-page/header/header.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { MainContentComponent } from './home-page/main-content/main-content.component';
import { AboutComponent } from './about/about.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainContentComponent, AboutComponent],
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'pampa';
}

