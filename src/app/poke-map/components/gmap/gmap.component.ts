import { Component, OnInit, ViewChild } from '@angular/core';
import {} from '@types/googlemaps';

@Component({
	selector: 'app-gmap',
	templateUrl: './gmap.component.html',
	styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit {

	@ViewChild('gmap') gmapElement: any;
	map: google.maps.Map;

	private centerPosition: google.maps.LatLng = new google.maps.LatLng(52.408, 16.934); // Poznan location

	constructor() { }

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
	}

}
