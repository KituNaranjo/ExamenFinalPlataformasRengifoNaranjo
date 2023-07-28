import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Realizar la solicitud HTTP al servidor para obtener los usuarios
    this.http.get<any[]>('http://localhost:3000/api/users').subscribe(users => {
      this.users = users;
    });
  }
}
