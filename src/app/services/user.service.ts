import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore , AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

interface User {
uid: string;
email: string;
photoURL: string;
displayName: string;
userRole: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user: Observable<User>;
  // uid = this.afAuth.authState.pipe(
  //   map(authState => {
  //     if (!authState) {
  //       return null;
  //     } else {
  //       this.user = authState;
  //       return authState.uid;
  //     }
  //   }));
  userRole = observableOf('admin');
  constructor(private afAuth: AngularFireAuth,
              private afa: AngularFirestore,
              private router: Router) {

    this.user = this.afAuth.authState.pipe(switchMap(user => {
      if (user) {
      return this.afa.doc<User>('users/' + user.uid).valueChanges();
      } else {
        return observableOf(null);
      }
    }));
  }

  LoginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }
  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((credential) => { this.updateUserDate(credential.user); });
  }
  private updateUserDate(user) {
    const userRef: AngularFirestoreDocument<User> = this.afa.doc('users/' + user.uid);

    const data: User = {
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      displayName: user.displayName,
      userRole: 'user'
    };
console.log(data);
    return userRef.set(data);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
