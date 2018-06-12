import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { GymsService } from '../../services/gyms.service';
import { MapService } from '../../services/map.service';
import { BehaviorSubject } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

const anim_fadeInOut = trigger('fadeInOut', [
		state('active', style({ opacity: 1 })),
		transition('void => *', [
			style({ opacity: 0 }),
			animate('200ms ease-in')
		]),
		transition('* => void', animate('100ms ease-out', style({ opacity: 0 })))
	]);

@Component({
	selector: 'app-gmap',
	templateUrl: './gmap.component.html',
	styleUrls: ['./gmap.component.scss'],
	animations: [ anim_fadeInOut ]
})
export class GmapComponent implements OnInit {

	@ViewChild('gmap') gmapElement: any;
	map: google.maps.Map;

	public showGymInfo: BehaviorSubject<boolean> = new BehaviorSubject(false);

	private centerPosition: google.maps.LatLng = new google.maps.LatLng(52.386445, 16.955266); // Poznan location
	private gymsLocations: google.maps.Marker[] = [];

	private readonly gymMarker: google.maps.Icon = {
		url: '/assets/gmaps/gymMarker.svg',
		scaledSize: new google.maps.Size(30, 30),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(15, 25),
		labelOrigin: new google.maps.Point(15, -12)
	};

	private readonly mapProps = {
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: this.centerPosition,
		fullscreenControl: false,
		streetViewControl: true,
		mapTypeControl: false,
		scaleControl: false,
		rotateControl: true,
		zoomControl: true,
		zoom: 15
	};

	constructor(
		private readonly gymsService: GymsService,
		private readonly mapService: MapService,
		private readonly _zone: NgZone
	) {}

	ngOnInit() {
		this.setUpGoogleMap();
		this.loadGymLocations();

		NgZone.assertInAngularZone();

		this.mapService.searcher
			.subscribe(gymTerm => this.findGym(gymTerm));
	}

	private setUpGoogleMap(): void {

		this.map = new google.maps.Map(this.gmapElement.nativeElement, this.mapProps);

		try {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(pos => {
					this.centerPosition = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
					this.map.setCenter(this.centerPosition);
				});
			}
		} catch (e) { /* Can not get localization. */ }
	}

	private makeGymMarker(gym: any): void {
		const coords = gym.geometry.coordinates;
		const title = gym.properties.name;
		const position = new google.maps.LatLng(coords[1], coords[0]);

		const marker = new google.maps.Marker({
			position: position,
			icon: this.gymMarker,
			title: title,
			label: {
				text: title,
				fontSize: '16px',
				fontWeight: '500',
				fontFamily: 'Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif'
			},
			map: this.map
		});

		marker.addListener('click', () => {
			this._zone.run(() => {
				this.showGymInfo.next(true);
			});
		});

		this.gymsLocations.push(marker);
	}

	private loadGymLocations(): void {
		this.gymsService.getGeoJson()
			.subscribe(geoJson => {
				geoJson.features.forEach(gym => {
					this.makeGymMarker(gym);
				});
			});
	}

	private findGym(term: string): void {

		for (let i = 0; i < this.gymsLocations.length; i++) {

			if (this.gymsLocations[i]
					.getTitle()
					.toLowerCase()
					.search(term.toLocaleLowerCase()) !== -1) {

				this.map.setZoom(17);
				this.map.panTo(this.gymsLocations[i].getPosition());

				setTimeout(() => {
					this.gymsLocations[i].setAnimation(google.maps.Animation.BOUNCE);
				}, 1000);

				setTimeout(() => {
					this.gymsLocations[i].setAnimation(null);
				}, 3500);

				return;
			}
		}
	}

	private closeGymInfo(): void {
		this.showGymInfo.next(false);
	}
}
