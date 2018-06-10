import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@pgh-shared/shared.module';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { environment } from '../../environments/environment';

import { LoginComponent } from './auth/login/login.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFirestoreModule
	],
	declarations: [
		LoginComponent
	],
	exports: [
		LoginComponent
	]
})
export class CoreModule { }
