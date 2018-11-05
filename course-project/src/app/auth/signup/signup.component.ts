import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.reducers';
import { TrySignup } from '../store/auth.actions';

// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    // private authService: AuthService
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new TrySignup({ username: email, password: password }));
    // this.authService.signupUser(email, password);
  }

}
