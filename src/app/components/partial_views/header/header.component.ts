import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/apiService/api.service';
import { textChangeRangeIsUnchanged } from 'typescript';
import { PopupModalComponent } from '../../popup-modal/popup-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authenticatedObj:any={};
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private apiService: ApiService
  ){
    this.apiService.authenticationChangeEvent.subscribe((data: any)=>{
      this.authenticatedObj=data;
    })
  }

  ngOnInit(): void {
    this.authenticatedObj=this.apiService.getAuthenticationDetails();
  }

  openContactUs() {
    const modalRef = this.modalService.open(PopupModalComponent);
    modalRef.componentInstance.message = 'Contact : 9132443434';
  }
  viewProfile() {
    this.router.navigate(['/profile']);
  }
  logout() {
    this.apiService.removeAuthenticationDetails();
    this.router.navigate(['/login']);
  }
  goToLogin() {
    this.router.navigate(['login']);
  }
}
