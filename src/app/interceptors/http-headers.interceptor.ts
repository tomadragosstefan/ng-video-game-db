import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            /*setHeaders: {
                'X-RapidAPI-Key' : '2028b799dbmshb682c387db3921ep1da14djsnf791afa0e4ab',
                'X-RapidAPI-Host' : 'rawg-video-games-database.p.rapidapi.com'
            },*/
            setParams: {
                key: 'aeb88cbe6494433c9f579ee32987b4c6'
            }
        });


        return next.handle(req);
    }
}
