import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: HttpClient
  ) { }

  private URL = 'http://localhost:3000';
  getImages(){
    return this.http.get(this.URL + '/donwload')
  }

  uploadImage(nombre: string, file: File) : Observable<Object>{
    const form = new FormData();
    form.append('nombre', nombre);
    form.append('file', file);

    return this.http.post<Object>(this.URL + '/upload', form);
  }
}
