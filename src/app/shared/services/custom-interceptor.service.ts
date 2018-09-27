import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from './../../core';

@Injectable({
  providedIn: 'root'
})
export class CustomInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = request.headers;
    headers = request.headers.set('Authorization', this.authService.getIdToken());
    const req = request.clone({ headers: headers, withCredentials: false });
    return next.handle(req).pipe(tap(event => {
      if (event instanceof HttpResponse) { }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) { }
    }));
  }
}
