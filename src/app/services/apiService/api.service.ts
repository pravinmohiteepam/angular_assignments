import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private authenticationChangeSource = new Subject();
  authenticationChangeEvent = this.authenticationChangeSource.asObservable();
  authenticatedObj:any={
    isAuthenticated:false,
    isAdminRole:false,
    userName: null
  };
  constructor(private http:HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }
  setAuthenticationDetails(isAdminRole: boolean,isAuthenticated: boolean,userName: any) {
    this.authenticatedObj={
      isAdminRole,
      isAuthenticated,
      userName
    }
    localStorage.setItem('authenticatedObj',JSON.stringify(this.authenticatedObj));
    this.authenticationChangeSource.next(this.authenticatedObj);
  }
  getAuthenticationDetails() {
    if(this.authenticatedObj.isAuthenticated===false) {
       let localStorageItem= localStorage.getItem('authenticatedObj');
       if(localStorageItem) {
         localStorageItem=JSON.parse(localStorageItem);
       }
       return localStorageItem;
    }
    else {
       return this.authenticatedObj;
    }
  }
  removeAuthenticationDetails() {
    this.setAuthenticationDetails(false,false,null);
    localStorage.removeItem('authenticatedObj');
  }
}
