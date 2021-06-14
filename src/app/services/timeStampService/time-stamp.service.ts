import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {catchError, retryWhen} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeStampService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>,next: HttpHandler):  Observable<HttpEvent<any>> {
    let timeStamp=(new Date()).getTime();
    const cloneReq=req.clone(
      {
        url: req.url+"&timeStamp="+timeStamp,
        headers: req.headers.set('TEST_HEADER','123'),
      }
      )
    console.log('clone req',cloneReq);
    return next.handle(cloneReq).pipe(catchError((err: any)=>{
      if(err instanceof HttpErrorResponse) {
        if(err.status === 401) {
          console.error('this should print your error',err.error);
        }
      }
      return new Observable<HttpEvent<any>>();
    }))
  }
}
