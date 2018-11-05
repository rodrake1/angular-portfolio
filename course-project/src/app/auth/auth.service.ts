// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

// import { Store } from '@ngrx/store';
// import { AppState } from '../store/app.reducers';
// import { Signup, Signin, SetToken, Logout } from './store/auth.actions';

// import { auth } from 'firebase';

// @Injectable()
// export class AuthService {
//   token: string;

//   constructor(
//     private router: Router,
//     private store: Store<AppState>
//   ) { }

//   signupUser(email: string, password: string) {
//     auth().createUserWithEmailAndPassword(email, password)
//       .then(
//         () => {
//           auth().signInWithEmailAndPassword(email, password).then(
//             () => {
//               this.store.dispatch(new Signin());
//               this.router.navigate(['/']);
//               auth().currentUser.getIdToken().then(
//                 (token: string) => {
//                   // this.token = token;
//                   this.store.dispatch(new SetToken(token));
//                 }
//               );
//             }
//           ).catch(
//             error => console.log(error)
//           );
//           this.store.dispatch(new Signup());
//         }
//       )
//       .catch(
//         error => console.log(error)
//       );
//   }

//   signinUser(email: string, password: string) {
//     auth().signInWithEmailAndPassword(email, password).then(
//       () => {
//         this.store.dispatch(new Signin());
//         this.router.navigate(['/']);
//         auth().currentUser.getIdToken().then(
//           (token: string) => {
//             // this.token = token;
//             this.store.dispatch(new SetToken(token));
//           }
//         );
//       }
//     ).catch(
//       error => console.log(error)
//     );
//   }

//   singoutUser() {
//     // this.token = null;
//     auth().signOut();
//     this.store.dispatch(new Logout());
//     this.router.navigate(['/']);
//   }

//   loadUser() {
//     auth().onAuthStateChanged(
//       (currentUser) => {
//         if (currentUser === null) {
//           this.token = null;
//         } else {
//           currentUser.getIdToken().then(
//             (token: string) => this.token = token
//           );
//         }
//       }
//     );

//   getToken() {
//     auth().currentUser.getIdToken().then(
//       (token: string) => {
//         this.token = token;
//       }
//     );
//     return this.token;
//   }

//   isAuthenticated() {
//     return this.token != null;
//   }
// }