import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { HomeComponent } from './pages/home/home.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  {path: 'acercade',component: AcercadeComponent},
  {path: 'contactos',component: ContactosComponent},
  {path: 'detalles',component: DetallesComponent},
  {path: 'ofertas',component: OfertasComponent},
  {path: 'productos',component: ProductosComponent},
  {path: 'terminos',component: TerminosComponent},
  {path: 'carrito',component: CarritoComponent},
  {path: '',component: HomeComponent},
  
  
  
  
  
  {path: '**',component: Error404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
