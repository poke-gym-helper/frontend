import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class MapService {

	private raids$: Observable<any> = new Observable(null);
	private searcher$: BehaviorSubject<any> = new BehaviorSubject(null);

	constructor() {}

	get searcher(): any {
		return this.searcher$
			.pipe(
				filter(term => term != null && term !== '')
			);
	}

	public tryFind(term: string): void {
		this.searcher$.next(term);
	}
}
