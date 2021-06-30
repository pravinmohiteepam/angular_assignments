import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidDetails = false;
  loginForm: NgForm | undefined;
  model: any ;
  constructor() { 
  }

  ngOnInit(): void {
    this.model = {
      name: '',
      password: ''
    }

  }

  onSubmit(form: Form) { 
    if (this.model.name === 'abc' || this.model.password === '$Admin#1') {
      this.invalidDetails = false;
      console.log('Username: ',this.model.name,' Password: ',this.model.password);
    }
    else {
      this.invalidDetails=true;
    }
  }
 
}
