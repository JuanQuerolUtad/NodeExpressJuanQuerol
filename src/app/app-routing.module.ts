import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NodeComponent } from './apartados/node/node.component';
import { ExpressComponent } from './apartados/express/express.component';
import { ErrorPagesComponent } from './apartados/error-pages/error-pages.component';

import { AppComponent } from './app.component';
import { InicioComponent } from './apartados/inicio/inicio.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  
  {path: 'node', component: NodeComponent},
  {path: 'express', component: ExpressComponent},
  {path: '**', component: ErrorPagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
