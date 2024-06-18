import { Routes } from '@angular/router';

import { InicioComponent } from './views/inicio/inicio.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { NoticiasComponent } from './views/noticias/noticias.component';

export const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'noticias', component: NoticiasComponent },
];
