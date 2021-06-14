import { Component } from '@angular/core';
import { ApiService } from './services/apiService/api.service';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  getUsersUrl: string = 'https://reqres.in/api/users?page=2';
  users: any;
  myNumber = "9075190764";
  dateNow : Date = new Date();
  constructor(private apiService: ApiService){}
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.apiService.getUsers(this.getUsersUrl).subscribe(response=>{
      this.users = response;
      console.log('users',this.users);
    })
  }
}
