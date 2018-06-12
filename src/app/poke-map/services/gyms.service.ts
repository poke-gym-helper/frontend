import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const fakeData = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'properties': {
				'name': 'Kids Playground'
			},
			'geometry': {
				'type': 'Point',
				'coordinates': [
					16.944622099399567,
					52.38811073362965
				]
			}
		},
		{
			'type': 'Feature',
			'properties': {
				'name': 'Poczta Polska'
			},
			'geometry': {
				'type': 'Point',
				'coordinates': [
					16.94242000579834,
					52.38631984359589
				]
			}
		},
		{
			'type': 'Feature',
			'properties': {
				'name': 'Kapliczka St. Waltera'
			},
			'geometry': {
				'type': 'Point',
				'coordinates': [
					16.944418251514435,
					52.38506584992411
				]
			}
		},
		{
			'type': 'Feature',
			'properties': {
				'name': 'Dziewczynka z misiem'
			},
			'geometry': {
				'type': 'Point',
				'coordinates': [
					16.947207748889923,
					52.384034470731095
				]
			}
		}
	]
};

@Injectable({
	providedIn: 'root'
})
export class GymsService {

	constructor() {}

	public getGeoJson() {
		return of(fakeData);
	}
}
