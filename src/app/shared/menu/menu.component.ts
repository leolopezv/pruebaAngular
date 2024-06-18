import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

import { InicioComponent } from '../../views/inicio/inicio.component';
import { NosotrosComponent } from '../../views/nosotros/nosotros.component';
import { NoticiasComponent } from '../../views/noticias/noticias.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, InicioComponent, NosotrosComponent, NoticiasComponent, RouterModule, RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent { }
