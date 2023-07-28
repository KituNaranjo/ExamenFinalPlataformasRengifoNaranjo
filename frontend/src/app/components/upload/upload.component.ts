import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  image:any = "../../../assets/images/gallery.png";
  imageForm : FormGroup|any;
  file: any;

  constructor(
    public authService: AuthService,
    public uploadService: UploadService,
    private router:  Router
  ){};

  ngOnInit(): void {
    this.imageForm = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      file: new FormControl(null, Validators.required)
    });
    
  }

  onFileChange(event:any){
    if(event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if(file.type.includes("image")){
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function load(this: any){
          this.image = reader.result;
        }.bind(this);

        this.file = file;
      }else {
        console.log("Error");
      }
    }
  }

  onSubmit(){
    const form = this.imageForm;
    if(form.valid) {
      this.uploadService.uploadImage(form.value.nombre, this.file)
      .subscribe(data => {
        this.imageForm = new FormGroup({
          nombre: new FormControl(null),
          file: new FormControl(null)
        })
        this.image = "../../../assets/images/gallery.png";
      })
    }
    
  }
}
