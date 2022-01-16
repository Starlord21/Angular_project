import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminloginauthService } from '../../service/adminloginauth.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LOGINComponent implements OnInit {
  loginForm: FormGroup
  loginCheck=false;
  errmsg= "";
  constructor(private _fb : FormBuilder, private _loginauth : AdminloginauthService, private _router : Router) 
  { this.loginForm = this._fb.group
    ({
      username : ["",Validators.required],
      password : ["",Validators.required]

    })}

  ngOnInit(): void {
  }
  submit()
  {
    if(this.loginForm.invalid)
    {
      this.loginCheck=true
    }
    else
    {
      // console.log(this.loginForm.value)
      this._loginauth.doLogin(this.loginForm.value).subscribe(result=>{
        // console.log("---------", result);
        localStorage.setItem("admintoken", result.token);
        this._router.navigate(["/admin/myaccount"])
     
     },err=>{
       if(err.error.type == 1)
       {
         this.errmsg = "username/email & password is incorrect"
       }
       if(err.error.type == 2)
       {
         this.errmsg = "password is incorrect"
       }
      
     }
     )
    }
  }
  
}
