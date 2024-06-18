import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { LogoComponent } from './shared/logo/logo.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterpageComponent } from './shared/footerpage/footerpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    LogoComponent,
    MenuComponent,
    FooterpageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'lopezAngular';
}
