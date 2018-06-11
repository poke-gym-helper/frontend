import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmapComponent } from './components/gmap/gmap.component';
import { PokeMapComponent } from './poke-map.component';
import { SharedModule } from '@pgh-shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	declarations: [
		GmapComponent,
		PokeMapComponent
	],
	exports: [
		GmapComponent,
		PokeMapComponent
	]
})
export class PokeMapModule { }
