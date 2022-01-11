import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginauthService } from '../../service/loginauth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  loginCheck=false;
  constructor(private _fb : FormBuilder, private _loginauth : LoginauthService, private _router : Router) 
  {
    this.loginForm = this._fb.group
    ({
      email : ["",[Validators.required,Validators.email]],
      password : ["",Validators.required]

    })
   }

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
      // localStorage.setItem("user_token", result.token)
      this._router.navigate(["/home"])
    })
  }
}

}
