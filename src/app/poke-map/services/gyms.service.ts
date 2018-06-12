import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { AppConf } from '../../../app-config';

@Injectable({
	providedIn: 'root'
})
export class GymsService {

	constructor() {}

	public getGeoJson() {
		return of(AppConf.gymsData);
	}
}
