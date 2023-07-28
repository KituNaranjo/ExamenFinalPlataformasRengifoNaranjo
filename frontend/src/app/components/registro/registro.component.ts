import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

declare var M:any;
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user ={
    nombre: '',
    edad: '',
    carrera: '',
    email: '',
    password: ''
  }
  constructor(
    private authService: AuthService,
    private router:  Router
    ){}
    
  ngOnInit(){  
  }

  registro(){
    this.authService.registro(this.user)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/public']);
        
      },
      err =>{
        console.log(err);

      } 
    )
  }
}
