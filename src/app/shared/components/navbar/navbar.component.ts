import { Component, OnInit } from '@angular/core';
import { AuthService } from '@pgh-core/auth/auth.service';
import { MatDialog } from '@angular/material';
import { GymSearchComponent } from '@pgh-shared/components/gym-search/gym-search.component';
import { MapService } from '../../../poke-map/services/map.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	public userName: string;

	constructor(
		private readonly authService: AuthService,
		private readonly mapService: MapService,
		public dialog: MatDialog
	) {}

	ngOnInit() {
		this.authService.user
			.subscribe(usr => {
				this.userName = (usr) ? usr.displayName || usr.email || `unknown` : null;
			});
	}

	private searchGym(term: string): void {
		this.mapService.tryFind(term);
	}

	public showSearch(): void {
		const dialogRef = this.dialog.open(GymSearchComponent, {
			data: { name: '' }
		});

		dialogRef.afterClosed().subscribe(result => {
			this.searchGym(result as string);
		});
	}

	public logout(): void {
		this.authService.signOut();
	}

}
