import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/apiService/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
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
