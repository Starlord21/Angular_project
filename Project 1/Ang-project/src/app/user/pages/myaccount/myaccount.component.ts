import { Component, OnInit } from '@angular/core';
import { LoginauthService } from '../../service/loginauth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { checkRePass } from 'src/app/helper/custome.validation';


@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  userInfo :any=[]
  updateProfile:FormGroup
  checkForm =false;
  

  passForm:FormGroup;
  checkpass=false;

  constructor(private _userinfo : LoginauthService,private _fb : FormBuilder) 
  {
    this.updateProfile = this._fb.group
    ({
      _id :[""],
      fullname : ["",Validators.required],
      email : ["",[Validators.required,Validators.email]],
      password: ["",Validators.required],
      re_password: ["",Validators.required],
      contact:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      city: ["",Validators.required],
      gender: ["",Validators.required],
      status :[""],
      address: ["",Validators.required],
    })
    this.passForm=this._fb.group({
      oldpass : ["",Validators.required],
      password: ["",Validators.required],
      re_password: ["",Validators.required],

    },{ validators : [checkRePass()]
    })
    
    this._userinfo.getUserInfo().subscribe(result=>{
      // console.log(result);
      this.userInfo = result;
      this.updateProfile.setValue(result)
      // this.updateProfile.patchValue(({ "password": "", "re_password" :"","status" :""}));
      
  }) }

  ngOnInit(): void {
  }
update(btn:any)
{
  if(this.updateProfile.invalid)
  {
    this.checkForm=true;
    return
  }
  console.log(this.updateProfile.value)
  this._userinfo.update(this.updateProfile.controls._id.value, this.updateProfile.value).subscribe(result=>{
    console.log(result);
   this.userInfo = this.updateProfile.value
    btn.click();
     })
}
updatepass(btn:any)
{
  if(this.passForm.invalid)
  {
    this.checkpass=true;
  }
  
 else
 {
  console.log(this.passForm.value)
  this._userinfo.updatepass(this.userInfo._id,this.passForm.value).subscribe(result=>{
    console.log(result)
   
  })
  btn.click()
 }
  
}

}