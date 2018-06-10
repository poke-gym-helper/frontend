import { Component, OnInit } from '@angular/core';
import { AuthService } from '@pgh-core/auth/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	public isLoggedIn = false;

	constructor(private readonly authService: AuthService) {}

	ngOnInit() {
		this.authService.user
			.subscribe(user => this.isLoggedIn = !!user);
	}

}
