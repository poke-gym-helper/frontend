import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
	selector: 'app-gym-search',
	templateUrl: './gym-search.component.html',
	styleUrls: ['./gym-search.component.scss']
})
export class GymSearchComponent {

	constructor(
		public dialogRef: MatDialogRef<GymSearchComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	onNoClick(): void {
		this.dialogRef.close();
	}

}
