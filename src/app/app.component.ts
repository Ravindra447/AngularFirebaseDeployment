import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularFirebase';
  firebaseConfig = {
    apiKey: "AIzaSyBVfEESE5-Q6q3WMNe1seN-ulACtaTihMM",
    authDomain: "angularfirebase-3e93c.firebaseapp.com",
    databaseURL: "https://angularfirebase-3e93c.firebaseio.com",
    projectId: "angularfirebase-3e93c",
    storageBucket: "angularfirebase-3e93c.appspot.com",
    messagingSenderId: "430867444007",
    appId: "1:430867444007:web:b793083eb45c04bbe4b902",
    measurementId: "G-T7J58G27S2"
  };
}
