import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: any;
  constructor(private userData : ApiService, private router:Router) {
    this.userData.users().subscribe((data)=>{
      this.users = data;
    })
   }

  ngOnInit(): void {
    
  }

  getUserFormData(data:any){
    console.warn(data)
    this.userData.saveUser(data).subscribe((result)=>{
      console.warn(result)
      alert("Signup Successfull")
      this.router.navigate(['login'])
    },err=>{
      alert("Something Went Wrong")
    })
  }

}
