import { Component, OnInit } from '@angular/core';
import { AuthService } from '@pgh-core/auth/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	userAuthorized = false;

	constructor(private auth: AuthService) {}

	ngOnInit() {
		this.auth.user
			.subscribe(user => {
				this.userAuthorized = !!user;
			});
	}

	onConnectFacebook() {
		this.auth.facebookLogin();
	}

	onSignOut() {
		this.auth.signOut();
	}
}
