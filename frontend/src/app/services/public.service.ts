import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPublic(){
    return this.http.get(this.URL + '/public');
  }

  getPrivate(){
    return this.http.get(this.URL + '/private');
  }

  getInfo(){
    return this.http.get(this.URL + '/info');
  }

  getPerfil(){
    return this.http.get(this.URL + '/perfil');
  }

  getUpload(){
    return this.http.get(this.URL + '/upload')
  }


}
