import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokeMapComponent } from './poke-map/poke-map.component';
import { AuthGuard } from '@pgh-core/auth/auth.guard.service';
import { LoginComponent } from '@pgh-core/auth/login/login.component';

const routes: Routes = [
	{ path: 'auth/login', component: LoginComponent },
	{ path: 'poke-map', component: PokeMapComponent, canActivate: [AuthGuard] },
	{ path: '**', redirectTo: 'poke-map' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
