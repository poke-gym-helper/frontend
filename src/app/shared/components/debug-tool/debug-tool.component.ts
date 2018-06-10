import { Component, OnInit } from '@angular/core';
import { AuthService } from '@pgh-core/auth/auth.service';


@Component({
	selector: 'app-debug-tool',
	templateUrl: './debug-tool.component.html',
	styleUrls: ['./debug-tool.component.scss']
})
export class DebugToolComponent implements OnInit {


	constructor(private readonly authService: AuthService) {}

	ngOnInit() {}

}
