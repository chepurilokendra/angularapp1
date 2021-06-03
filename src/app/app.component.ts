import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})

export class AppComponent {

  userObj:User={username:"",dob:"",email:""};
  users=[];

 
  addUserData(){

   // let userObj=ref.value;
    console.log(this.userObj)
    this.userObj={username:"",dob:"",email:""};
    //push into users array
   // this.users.push(userObj)

    //clear form flields
   // ref.reset();
  }
}



