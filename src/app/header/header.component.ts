// importing the component from the angular core package
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

// Decorating the class of the App header component
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// Exporting the HeaderComponent class
export class HeaderComponent implements OnInit {
  // Define the constructor of the app
  formLogin
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log('Component app-header inciado...');
    this.formLogin = this.fb.group({
      cpf: ['']
    });
  }

}
