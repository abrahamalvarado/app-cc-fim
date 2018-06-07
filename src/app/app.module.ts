import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadousuariosComponent } from './usuarios/listadousuarios/listadousuarios.component';
import { ListadoalumnosComponent } from './alumnos/listadoalumnos/listadoalumnos.component';
import { ListadoequiposComponent } from './equipos/listadoequipos/listadoequipos.component';
import { ListadoserviciosComponent } from './servicios/listadoservicios/listadoservicios.component';

const routes: Routes = [
  { path: 'usuarios', component: ListadousuariosComponent},
  { path: 'alumnos', component: ListadoalumnosComponent},
  { path: 'equipos', component: ListadoequiposComponent},
  { path: 'servicios', component: ListadoserviciosComponent},
  { path: '**', component: InicioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    InicioComponent,
    ListadousuariosComponent,
    ListadoalumnosComponent,
    ListadoequiposComponent,
    ListadoserviciosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
