import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkRePass } from 'src/app/helper/custome.validation';
import { SignupFormService } from 'src/app/user-service/signup-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  regForm:FormGroup;
  checkForm = false;
  afterSubmit=false;

  constructor(private _fb : FormBuilder, private _signup : SignupFormService, private _router: Router) 
  {
    this.regForm = this._fb.group({
      fullname : ["",Validators.required],
      email : ["",[Validators.required,Validators.email]],
      password: ["",Validators.required],
      re_password: ["",Validators.required],
      contact:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      city: ["",Validators.required],
      gender: ["",Validators.required],
     
      address: ["",Validators.required],
    },
    {validators : [checkRePass()]}
    )
   }

  ngOnInit(): void {
  }
submit()
{
  if(this.regForm.invalid)
  {
    this.checkForm=true;
    return
  }
   console.log(this.regForm.value)
  this._signup.save(this.regForm.value).subscribe(result=>{
    
    if(result.success == true)
    {
      this.regForm.reset()
      this.afterSubmit=true
      this.checkForm =false
      this._router.navigate(["/login"])
    }
  })
}
}
