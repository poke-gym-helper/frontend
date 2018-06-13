import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { AppConf } from '../../../app-config';
import { IGym } from '@pgh-shared/models/i-gym';

@Injectable({
	providedIn: 'root'
})
export class GymsService {

	constructor() {}

	public getGeoJson(): Observable<{'type': string, 'features': IGym[]}> {
		return of(AppConf.gymsData);
	}
}
