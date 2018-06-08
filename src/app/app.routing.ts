import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { LoginComponent } from './auth-module/components/login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadousuariosComponent } from './usuarios/listadousuarios/listadousuarios.component';
import { ListadoalumnosComponent } from './alumnos/listadoalumnos/listadoalumnos.component';
import { ListadoequiposComponent } from './equipos/listadoequipos/listadoequipos.component';
import { ListadoserviciosComponent } from './servicios/listadoservicios/listadoservicios.component';
import { RegistroAlumnosComponent } from './alumnos/registro/registro.component';
import { ActualizarAlumnosComponent } from './alumnos/actualizar/actualizar.component';


const appRoutes: Routes = [
  { path: 'usuarios', component: ListadousuariosComponent},
  { path: 'alumnos', component: ListadoalumnosComponent},
  { path: 'equipos', component: ListadoequiposComponent},
  { path: 'servicios', component: ListadoserviciosComponent},
  { path: 'registroalumno', component: RegistroAlumnosComponent},
  { path: 'editaralumno/:id', component: ActualizarAlumnosComponent},
  { path: '', component: InicioComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: InicioComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: InicioComponent},
];


export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);