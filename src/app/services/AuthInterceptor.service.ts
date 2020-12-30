import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!(req.url.includes('authenticate') || req.url.includes('register'))) {
            req = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))});
        }
        return next.handle(req);
    }
}
