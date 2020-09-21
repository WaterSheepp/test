import { Injectable } from '@angular/core';
import { User } from '../models/userLogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { userAdd } from '../models/userAdd';
import { JwtHelperService } from '@auth0/angular-jwt';
import { from } from 'rxjs';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public token;

  showUsers: userAdd;

  selectedUser: userAdd ={

    _id: '',
    user_name: '',
    name: '',
    sur_name: '',
    password: '',
    carnet: '',
    rol: ''

  };

  constructor(private http: HttpClient) { }

  createUser(user: User) {

    var header = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
    var params = JSON.stringify(user)

    return this.http.post(environment.apiBaseUrl + '/addUser', params, {headers: header})
  }

  login(authCredentials) {

    var header = new HttpHeaders().set('Content-Type', 'application/json')
    var params = JSON.stringify(authCredentials)

    return this.http.post(environment.apiBaseUrl + '/login', params, {headers: header})

  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {

    var tokenAlt = localStorage.getItem('token');

    if(tokenAlt != "undefined") {
      this.token = tokenAlt
    }else{
      this.token = null;
    }
    return this.token
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = localStorage.getItem('token');
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload) 
    }else{
      return null;
    }
  }

  isLogedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
      else
        return false;
  }

  editUser(user: User) {

    var header = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());
    var params = JSON.stringify(user)

    return this.http.post(environment.apiBaseUrl + '/addUser', params, {headers: header})

  }
  
}
