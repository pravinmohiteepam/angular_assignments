import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/apiService/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidDetails = false;
  loginForm: NgForm | undefined;
  model: any ;
  usersListingRoute='list';
  constructor(
    private router:Router,
    private apiService: ApiService) { 
  }

  ngOnInit(): void {
    this.model = {
      name: '',
      password: ''
    }

  }

  onSubmit(form: Form) { 
    if (this.model.name === 'abc' && this.model.password === '$Admin#1') {
      this.invalidDetails = false;
      this.apiService.setAuthenticationDetails(false,true,this.model.name);
      this.router.navigate([this.usersListingRoute]);
    }
    else if(this.model.name==='admin' && this.model.password === '$Admin#1') {
      this.apiService.setAuthenticationDetails(true,true,this.model.name);
      this.router.navigate([this.usersListingRoute]);
      this.invalidDetails = false;
    }
    else {
      this.invalidDetails=true;
    }
  }
 
}
