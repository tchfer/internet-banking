// importing the component from the angular core package
import { Component, OnInit } from '@angular/core';

// Decorating the class of the App header component
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// Exporting the HeaderComponent class
export class HeaderComponent implements OnInit {
  // Define the constructor of the app
  constructor() { }

  ngOnInit() {
    console.log('Component app-header inciado...');
  }

}
