import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-gym-info',
	templateUrl: './gym-info.component.html',
	styleUrls: ['./gym-info.component.scss']
})
export class GymInfoComponent {

	@Output() closeHandler = new EventEmitter<boolean>();

	public onClose(): void {
		this.closeHandler.emit(true);
	}
}
