import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';

const appRoutes: Routes = [
	{path:' ', component: AboutComponent},
	{path: 'acerca de', component: AboutComponent},
	{path: 'proyecto', component: ProyectoComponent},
	{path: 'crear', component: CreateComponent},
	{path:'contacto', component: ContactComponent},
	{path: '**', component: AboutComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);