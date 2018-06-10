import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';

import {
	MatToolbarModule,
	MatCardModule,
	MatInputModule,
	MatButtonModule,
	MatFormFieldModule,
	MatIconModule,
	MatDividerModule,
	MatSnackBarModule,
	MatMenuModule
} from '@angular/material';

import { DebugToolComponent } from './components/debug-tool/debug-tool.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		RouterModule,
		CommonModule,
		HttpClientModule,
		MatToolbarModule,
		MatButtonModule
	],
	declarations: [
		NavbarComponent,
		DebugToolComponent
	],
	exports: [
		HttpClientModule,
		MatCardModule,
		MatToolbarModule,
		MatDividerModule,
		MatInputModule,
		MatButtonModule,
		MatFormFieldModule,
		MatSnackBarModule,

		NavbarComponent,
		DebugToolComponent
	]
})
export class SharedModule { }
