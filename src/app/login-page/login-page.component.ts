import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  login: any = {};
  constructor() { }

  ngOnInit() {
  }
  onLoggedIn({ controls, invalid }) {
    console.log('form data ---------------->', FormData, this.login)

    if (invalid) {
      return;
    }
  }

}
