import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IGym } from '@pgh-shared/models/i-gym';

@Component({
	selector: 'app-gym-info',
	templateUrl: './gym-info.component.html',
	styleUrls: ['./gym-info.component.scss']
})
export class GymInfoComponent {

	@Input() coords: google.maps.LatLng;
	@Input() gymData: IGym;
	@Output() closeHandler = new EventEmitter<boolean>();

	public raidInfo = 'Brak danych';
	public gymDesc = 'Brak opisu';

	private readonly directionUrl = `maps.google.com/maps/dir/?api=1`;

	private openNativeMap(lat: number, long: number, mode: string = 'walking'): void {
		const platform = (navigator) ? navigator.platform : 'unknow';
		let urlPrefix: string = null;

		if (
			(platform.indexOf('iPhone') !== -1) ||
			(platform.indexOf('iPad') !== -1) ||
			(platform.indexOf('iPod') !== -1)
		) {
			urlPrefix = `maps://`;
		} else {
			urlPrefix = `https://`;
		}

		const gmapUrl = `${urlPrefix}${this.directionUrl}&destination=${lat},${long}&travelmode=${mode}`;
		window.open(gmapUrl);
	}

	public startNavigate(): void {

		if (!this.coords) {
			return;
		}

		const lat = this.coords.lat() || null;
		const long = this.coords.lng() || null;

		if (lat && long) {
			this.openNativeMap(lat, long);
		}
	}

	public onClose(): void {
		this.closeHandler.emit(true);
	}
}
