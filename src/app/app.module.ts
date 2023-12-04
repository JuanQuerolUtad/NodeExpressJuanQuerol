import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { NodeComponent } from './apartados/node/node.component';
import { ExpressComponent } from './apartados/express/express.component';
import { ErrorPagesComponent } from './apartados/error-pages/error-pages.component';
import { InicioComponent } from './apartados/inicio/inicio.component';
import { PieComponent } from './pie/pie.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    NodeComponent,
    ExpressComponent,
    ErrorPagesComponent,
    InicioComponent,
    PieComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
