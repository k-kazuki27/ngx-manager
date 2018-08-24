import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = request.headers;
    const req = request.clone({ headers: headers, withCredentials: true });
    return next.handle(req).pipe(tap(event => {
      if (event instanceof HttpResponse) { }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) { }
    }));
  }
}
