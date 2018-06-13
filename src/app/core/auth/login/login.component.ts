import { Component, OnInit } from '@angular/core';
import { AuthService } from '@pgh-core/auth/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public userAuthorized = false;

	constructor(private auth: AuthService) {}

	ngOnInit() {
		this.auth.user
			.subscribe(user => {
				this.userAuthorized = !!user;
			});
	}

	public get ready(): boolean {
		return this.auth.ready;
	}

	public onConnectFacebook() {
		this.auth.facebookLogin();
	}

	public onSignOut() {
		this.auth.signOut();
	}
}
