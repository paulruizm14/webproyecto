import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componenet/nav-bar/nav-bar.component';
import { FutterComponent } from './componenet/futter/futter.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { Error404Component } from './pages/error404/error404.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FutterComponent,
    AcercadeComponent,
    HomeComponent,
    ProductosComponent,
    OfertasComponent,
    DetallesComponent,
    TerminosComponent,
    ContactosComponent,
    Error404Component,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
