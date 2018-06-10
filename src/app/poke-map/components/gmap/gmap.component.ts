import { Component, OnInit, ViewChild } from '@angular/core';
import { GymsService } from '../../services/gyms.service';

@Component({
	selector: 'app-gmap',
	templateUrl: './gmap.component.html',
	styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit {

	@ViewChild('gmap') gmapElement: any;
	map: google.maps.Map;

	private centerPosition: google.maps.LatLng = new google.maps.LatLng(52.408, 16.934); // Poznan location

	constructor(private readonly gymsService: GymsService) { }

	ngOnInit() {

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

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(pos => {
				console.log(pos);
				this.centerPosition = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
				this.map.setCenter(this.centerPosition);
			});
		}

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

				});
			});
	}

}
