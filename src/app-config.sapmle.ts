/*
	1) Copy this file
	2) Rename copy to 'app-config.ts'
	3) Fill required data
*/

export const AppConf = {
	prod: {
		firebase: {
			apiKey: '',
			authDomain: '',
			databaseURL: '',
			projectId: '',
			storageBucket: '',
			messagingSenderId: ''
		}
	},
	dev: {
		firebase: {
			apiKey: '',
			authDomain: '',
			databaseURL: '',
			projectId: '',
			storageBucket: '',
			messagingSenderId: ''
		}
	},
	gymsData: {
		'type': 'FeatureCollection',
		'features': [
			{
				'type': 'Feature',
				'properties': {
					'name': 'Gym Name 1',
					'id': 'abc123'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [
						16.91,
						52.32
					]
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'name': 'Gym Name 2',
					'id': 'cba321'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [
						16.94,
						52.38
					]
				}
			}
		]
	}
};
