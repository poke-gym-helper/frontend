import { Component, OnInit, ViewChild } from '@angular/core';
import { GymsService } from '../../services/gyms.service';
import { MapService } from '../../services/map.service';

@Component({
	selector: 'app-gmap',
	templateUrl: './gmap.component.html',
	styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit {

	@ViewChild('gmap') gmapElement: any;
	map: google.maps.Map;

	private centerPosition: google.maps.LatLng = new google.maps.LatLng(52.408, 16.934); // Poznan location
	private gymsLocations: google.maps.Marker[] = [];

	constructor(
		private readonly gymsService: GymsService,
		private readonly mapService: MapService
	) {}

	ngOnInit() {
		this.setUpGoogleMap();
		this.loadGymLocations();

		this.mapService.searcher
			.subscribe(gymTerm => this.findGym(gymTerm));
	}

	private setUpGoogleMap(): void {
		const mapProp = {
			center: new google.maps.LatLng(52.408, 16.934),
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			streetViewControl: true,
			mapTypeControlOptions: {
				mapTypeIds: []
			}
		};

		this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

		try {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(pos => {
					console.log(pos);
					this.centerPosition = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
					this.map.setCenter(this.centerPosition);
				});
			}
		} catch (e) { /* Can not get localization. */ }
	}

	private loadGymLocations(): void {
		this.gymsService.getGeoJson()
			.subscribe(geoJson => {
				geoJson.features.forEach(gym => {
					const coords = gym.geometry.coordinates;
					const title = gym.properties.name;
					const position = new google.maps.LatLng(coords[1], coords[0]);
					const marker = new google.maps.Marker({
						position,
						title,
						map: this.map
					});

					marker.addListener('click', function() {
						const infowindow = new google.maps.InfoWindow({
							content: title
						});
						infowindow.open(this.map, marker);
					});

					this.gymsLocations.push(marker);
				});
			});
	}

	private findGym(term: string): void {

		for (let i = 0; i < this.gymsLocations.length; i++) {

			if (this.gymsLocations[i]
					.getTitle()
					.toLowerCase()
					.search(term.toLocaleLowerCase()) !== -1) {

				this.map.setCenter(this.gymsLocations[i].getPosition());
				this.gymsLocations[i].setAnimation(google.maps.Animation.BOUNCE);

				setTimeout(() => {
					this.gymsLocations[i].setAnimation(null);
				}, 2500);

				return;
			}
		}
	}

}
