import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {
	MatToolbarModule,
	MatCardModule,
	MatInputModule,
	MatButtonModule,
	MatFormFieldModule,
	MatIconModule,
	MatDividerModule,
	MatSnackBarModule,
	MatDialogModule,
	MatAutocompleteModule,
	MatMenuModule,
	MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';

import { NavbarComponent } from './components/navbar/navbar.component';
import { GymSearchComponent } from '@pgh-shared/components/gym-search/gym-search.component';

@NgModule({
	imports: [
		RouterModule,
		CommonModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatDividerModule,
		MatAutocompleteModule,
		MatIconModule,
		MatDialogModule,
		MatToolbarModule,
		MatMenuModule,
		MatButtonModule
	],
	entryComponents: [
		GymSearchComponent
	],
	declarations: [
		NavbarComponent,
		GymSearchComponent
	],
	exports: [
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule,
		MatCardModule,
		MatToolbarModule,
		MatDividerModule,
		MatDialogModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
		MatMenuModule,
		MatFormFieldModule,
		MatSnackBarModule,
		MatAutocompleteModule,
		NavbarComponent
	],
	providers: [
		{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true, disableClose: true, autoFocus: true } }
	]
})
export class SharedModule { }
