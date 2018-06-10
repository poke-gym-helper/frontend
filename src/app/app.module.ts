import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SharedModule } from '@pgh-shared/shared.module';
import { PokeMapModule } from './poke-map/poke-map.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		CoreModule,
		SharedModule,
		PokeMapModule,
		BrowserModule,
		AppRoutingModule,
		ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
