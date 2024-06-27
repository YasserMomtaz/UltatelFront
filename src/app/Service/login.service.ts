import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../dto/user.dto';
import { Token } from '../dto/token.dto';
import { BehaviorSubject, Observable } from 'rxjs';
import { RegisterUser } from '../dto/registerUser.dto';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public UserId:BehaviorSubject<string>=new BehaviorSubject<string>("");
  public IsLogged=false;
  private baseUrl="https://ultatel-back-eight.vercel.app/";
    constructor(private httpClient: HttpClient) { }

    userLogin(user:User): Observable<Token> {
      return this.httpClient.post<Token>(this.baseUrl+"auth/login",user)
    }

    setUserId(userId:string)
    {
      this.UserId.next(userId);
    }
   
    register(username: string,email:string, password: string): Observable<any> {
      return this.httpClient.post<any>(this.baseUrl+`auth/register`, { username,email, password });
    }
  
}
