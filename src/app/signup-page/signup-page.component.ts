import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
SignIn : any = {} ;
  constructor() { }

  ngOnInit() {
  }
  onSignIn({ controls, invalid }){
    console.log('form data ---------------->', FormData, this.SignIn)
    if(invalid)
    {
      return;
    }
  }
}
