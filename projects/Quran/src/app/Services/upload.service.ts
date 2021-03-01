import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';



@Injectable({
  providedIn: 'root'
})

export class UploadService {


  uploadImg(imgUri) {

    console.log("Selected Image : ", imgUri);


  }

}
