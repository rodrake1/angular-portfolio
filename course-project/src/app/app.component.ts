import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAKYycvHS8079ROq2oxe_ISdmvAM3U5y8U",
      authDomain: "recipe-book-dda25.firebaseapp.com"
    });
    this.authService.loadUser();
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
