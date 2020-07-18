import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorsService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const apiToken = new HttpHeaders({'x-auth-token': '3eec30c0ebb242a19c4e7543504823cc'});
    
    const reqClone = req.clone({headers: apiToken});
    
    return next.handle(reqClone);
  }
}
