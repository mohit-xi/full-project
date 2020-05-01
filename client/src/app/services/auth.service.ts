import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpRequest} from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  domain="http://localhost:8080";
  authToken;
  user;
  options;
  helper = new JwtHelperService();
 

  constructor(
    private http:HttpClient,
  ) { }

  createAuthenticationHeaders(){
    this.loadToken();
    this.options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'authorization': this.authToken
      })
    };
  }

  loadToken(){
    const token=localStorage.getItem('token');
    this.authToken=token;
  }


  registerUser(user){
    return this.http.post(this.domain+'/authentication/register',user);
  }
  checkUsername(username){
    return this.http.get(this.domain+'/authentication/checkUsername/'+username);
  }
  checkEmail(email){
    return this.http.get(this.domain+'/authentication/checkEmail/'+email);
  }



  login(user){
    return this.http.post(this.domain+'/authentication/login',user)
  }

  logOut(){
    this.authToken=null;
    this.user=null;
    localStorage.clear();
    alert("You are logged out!");
  }


  storeUserData(token,user){
    localStorage.setItem('token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken=token;
    this.user=user;
  }

  getProfile(){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain+'/authentication/profile',this.options);
  }
  loggedIn(){
    return !this.helper.isTokenExpired(localStorage.getItem('token'));
  }

  getPublicProfile(username) {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + '/authentication/publicProfile/' + username, this.options);
  }
}
