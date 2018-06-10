import { Component, OnInit } from '@angular/core';
import { AuthService } from '@pgh-core/auth/auth.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	constructor(private readonly authService: AuthService) {}

	ngOnInit() {}

	public logout(): void {
		this.authService.signOut();
	}

}
