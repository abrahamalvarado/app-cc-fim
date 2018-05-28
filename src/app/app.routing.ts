import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { LoginComponent } from './auth-module/components/login/login.component';


const appRoutes: Routes = [ 
	{path: '', component: SidemenuComponent},
	{path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: SidemenuComponent},
  {path: 'login', component: LoginComponent}
];


export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);