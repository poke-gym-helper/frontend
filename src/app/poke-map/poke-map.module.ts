import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmapComponent } from './components/gmap/gmap.component';
import { PokeMapComponent } from './poke-map.component';
import { SharedModule } from '@pgh-shared/shared.module';
import { GymInfoComponent } from './components/gym-info/gym-info.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	declarations: [
		GmapComponent,
		PokeMapComponent,
		GymInfoComponent
	],
	exports: [
		GmapComponent,
		PokeMapComponent
	]
})
export class PokeMapModule { }
