import { Component, OnInit } from '@angular/core';

import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    initializeApp({
      apiKey: "AIzaSyAKYycvHS8079ROq2oxe_ISdmvAM3U5y8U",
      authDomain: "recipe-book-dda25.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}