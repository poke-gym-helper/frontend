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
					16.9424307346344,
					52.38655066622549
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
