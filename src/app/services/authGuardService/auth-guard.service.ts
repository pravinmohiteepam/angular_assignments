import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiService } from '../apiService/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private apiService: ApiService,
    private router:Router
    ) { }
  canActivate() {
    const result=this.apiService.getAuthenticationDetails();
    if(result) {
      return result.isAuthenticated;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
    
  }
}
