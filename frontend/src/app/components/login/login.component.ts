import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


declare var M:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user ={
    nombre: '',
    edad: 0,
    carrera: '',
    email: '',
    password: ''
  }

  constructor(private authService: AuthService,
    private router:Router
  ) {}

  ngOnInit() {
  }

  login(){
    this.authService.login(this.user)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/public']);
      },
      err => {
        console.log(err);
      }
    )
  }

}
