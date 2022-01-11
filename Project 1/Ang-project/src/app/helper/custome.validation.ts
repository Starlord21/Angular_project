import { FormGroup } from "@angular/forms";

export function checkRePass(){
   return function(abc : FormGroup){
       let a = abc.controls.password;
       let b = abc.controls.re_password;

       if(b.errors && ! b.errors.repasserr)
       {
           return;
       }

       if(a.value != b.value)
       {
           b.setErrors({ repasserr : true });
       }
       else{
           b.setErrors(null);
       }
   }
}