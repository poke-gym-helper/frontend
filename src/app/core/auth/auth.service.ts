import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { IUser } from '@pgh-shared/models/i-user';

import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class AuthService {

	public user: Observable<IUser>;

	constructor(
		private readonly afAuth: AngularFireAuth,
		private readonly afStore: AngularFirestore,
		private readonly router: Router,
	) {
		this.afAuth.auth.useDeviceLanguage();

		this.user = this.afAuth.authState
			.pipe(
				switchMap((user: firebase.User) => {
					if (user) {
						return this.afStore.doc<IUser>(`users/${user.uid}`).valueChanges();
					} else {
						return of(null);
					}
				})
			);
	}

	public isLoggedIn(): Observable<boolean> {
		return this.user
			.pipe(
				map(user => !!user)
			);
	}

	public signOut() {
		this.afAuth.auth.signOut()
			.then(() => {
				this.router.navigate(['/auth/login']);
			})
			.catch(e => console.log(e.code));
	}

	public facebookLogin() {
		const provider = new firebase.auth.FacebookAuthProvider();
		return this.oAuthLogin(provider);
	}

	private oAuthLogin(provider) {
		return this.afAuth.auth.signInWithPopup(provider)
			.then(cred => {
				this.updateUserData(cred.user);
				this.router.navigate(['/']);
			});
	}

	private updateUserData(user) {
		const userRef: AngularFirestoreDocument<IUser> = this.afStore.doc(`users/${user.uid}`);

		const data: IUser = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName
		};

		return userRef.set(data);
	}
}
