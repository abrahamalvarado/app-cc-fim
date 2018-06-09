import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

// import modules
import { AuthModule } from './auth-module/auth.module';

// components
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadousuariosComponent } from './usuarios/listadousuarios/listadousuarios.component';
import { ListadoalumnosComponent } from './alumnos/listadoalumnos/listadoalumnos.component';
import { ListadoequiposComponent } from './equipos/listadoequipos/listadoequipos.component';
import { ListadoserviciosComponent } from './servicios/listadoservicios/listadoservicios.component';
import { RegistroAlumnosComponent } from './alumnos/registro/registro.component';
import { ActualizarAlumnosComponent } from './alumnos/actualizar/actualizar.component';
import { RegistroEquiposComponent } from './equipos/registro/registro.component';

// server modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

//services
import { AlumnoService } from './services/alumno.service'
import { EquipoService } from './services/equipo.service'
export const firebaseConfig = {
  fire: {
    apiKey: 'AIzaSyBUxwERyaYEuSKUP0R5lwaslH0Mpk5udSo',
    authDomain: 'app-cc-fim.firebaseapp.com',
    databaseURL: 'https://app-cc-fim.firebaseio.com',
    projectId: 'app-cc-fim',
    storageBucket: 'app-cc-fim.appspot.com',
    messagingSenderId: '131127876929'
  }
}

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    InicioComponent,
    ListadousuariosComponent,
    ListadoalumnosComponent,
    ListadoequiposComponent,
    ListadoserviciosComponent,
    RegistroAlumnosComponent,
    ActualizarAlumnosComponent,
    RegistroEquiposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    AngularFireModule.initializeApp(firebaseConfig.fire),
    routing
  ],
  providers: [
    AngularFireDatabase,
    appRoutingProviders,
    AlumnoService,
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
