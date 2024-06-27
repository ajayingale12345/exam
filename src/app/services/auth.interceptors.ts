import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
//const TOKEN_HEADER ='Authorization';
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private login:LoginService){}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
        ): Observable<HttpEvent<any>> {
        //throw new Error("Method not implemented.");
  console.log("Hello Ajay")
        //Add the JWT Token
        let authReq=req
        const token =this.login.getToken();
        console.log(token)
        if(token !=null){
        authReq =authReq.clone({setHeaders:{Authorization:`Bearer  ${token}`},
    });
        }
    return next.handle(authReq)
    }


}
export const AuthInterceptorProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass :AuthInterceptor,
        multi:true
    },
]

