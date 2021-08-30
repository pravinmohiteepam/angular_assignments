import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/apiService/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  getUsersUrl = 'https://reqres.in/api/users?page=2';
  users: any;
  myNumber = "9075190764";
  dateNow : Date = new Date();
  isAdminRole: any;
  constructor(
    private apiService: ApiService,
    private router: Router
    )
    {
      this.apiService.authenticationChangeEvent.subscribe((data:any)=>{
        this.isAdminRole=data.isAdminRole;
      })
    }

  ngOnInit() {
    this.getUsers();
    this.isAdminRole=this.apiService.getAuthenticationDetails()?.isAdminRole;
  }
  getUsers() {
    this.apiService.get(this.getUsersUrl).subscribe(response=>{
      this.users = response;
    })
  }
}
