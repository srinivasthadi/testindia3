import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { User } from '../user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthserviceService {
  userData: any ;

  constructor(public afs: AngularFirestore, 
              public afAuth: AngularFireAuth, 
              public router: Router,
              public ngZone: NgZone ) {
    //Need to save user data in local store 
    this.afAuth.authState.subscribe(user => {
      if(user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
   }

  async login(email: string, password: string){
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['trainings']);
        })
        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      })
      }

  async logout() {
    return this.afAuth.auth.signOut()
          .then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['login']);
          })
          .catch((error) => {
            window.alert(error.message);
          })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  loginWithGoogle() {
    return this.authLogin(new auth.GoogleAuthProvider());
  }

  async authLogin(provider: any){
      return await this.afAuth.auth.signInWithPopup(provider)
          .then((result) => {
            this.ngZone.run(() => {
              this.router.navigate(['trainings']);
            })
            this.setUserData(result.user);
          })
          .catch((error) => {
            window.alert(error.message);
          })

  }

  async createUser(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
          .then((result) => {
            window.alert('SignUp was successful ');
          })
          .catch((error) => {
            window.alert(error.message);
          })          
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
   
    const userData: User = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
    }
  }



}
