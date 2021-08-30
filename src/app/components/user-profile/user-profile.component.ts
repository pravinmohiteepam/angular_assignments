import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/apiService/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  currentUserId:number | undefined;
  currentUser:any;
  getUsersById = 'https://reqres.in/api/users?id=';

  constructor(
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private apiService:ApiService) { 
    this.activatedRoute.params.subscribe(params => {
      this.currentUserId=params.id;
   });
  }

  ngOnInit(): void {
    const finalUrl=this.getUsersById+this.currentUserId;
    this.apiService.get(finalUrl).subscribe((response: any)=>{
      if(response && response.data) {
        this.currentUser=response.data;
      }
    })
  }
}
