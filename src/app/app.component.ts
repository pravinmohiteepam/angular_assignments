import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ApiService } from './services/apiService/api.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { PopupModalComponent } from './components/popup-modal/popup-modal.component';
import { DynamicComponent } from './components/dynamic-component/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('footerTemplate', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  closeResult = '';
  
  constructor(private apiService: ApiService,
    private modalService: NgbModal,
    private cfr: ComponentFactoryResolver
  ){
  }
  ngAfterViewInit() {
    this.loadComponent();
  }

  openContactUs() {
    const modalRef = this.modalService.open(PopupModalComponent);
    modalRef.componentInstance.message = 'Contact : 9132443434';
  }
  loadComponent() {
    this.viewRef.clear();
    const componentFactory = this.cfr.resolveComponentFactory(DynamicComponent);
    const componentRef = this.viewRef.createComponent(componentFactory);
  }
}
