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

	private readonly directionUrl = `https://www.google.com/maps/dir`;

	private openNativeMap(lat: number, long: number): void {
		const gmapUrl = `${this.directionUrl}/${''}/${lat},${long}`;
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
