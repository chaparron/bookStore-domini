import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isError:string = '';
  public email:string ='';
  public password:string ='';

  constructor(public auth: AngularFireAuth, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onLogin():void {
    this.authService.loginEmailUser(this.email, this.password)
    .then((res)=>{
      this.onLoginRedirect();
    }).catch(err => console.log('err', err.message));
  }

  onLoginGoogle():void {
    this.authService.loginGoogleUser()
    .then((res) =>{
    //console.log('resUser', res); //nos pasa los datos del usuario por consola
    this.onLoginRedirect();
    }).catch(err => console.log('err', err.message))
  }
  onLogout() {
    this.authService.logoutUser();
  }

  onLoginRedirect(){
    this.router.navigate(['admin/list-books']);
  }
}