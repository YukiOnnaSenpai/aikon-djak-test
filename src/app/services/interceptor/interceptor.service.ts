import { Injectable } from '@angular/core';
import {HttpInterceptor,
  HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(){}

  private static TENANT : string;
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Welcome to interceptor");

    InterceptorService.TENANT = location.hostname;

    return next.handle(req);
  }

  static getTenant(){
    return this.TENANT;
  }
}