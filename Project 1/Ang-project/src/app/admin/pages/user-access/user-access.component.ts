import { Component, OnInit } from '@angular/core';
import { SignupFormService } from 'src/app/user-service/signup-form.service';

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.css']
})
export class UserAccessComponent implements OnInit {
  allUser : any =[]
  constructor(private _useraccess : SignupFormService) {
    this._useraccess.getAll().subscribe(result=>{
      this.allUser = result
    })
   }

  ngOnInit(): void {
  }
 change(obj:any)
 {
  obj.status = !obj.status ? 1 : 0;
  this._useraccess.update(obj._id, obj).subscribe(result=>{
    console.log(result);
  })
 }
}
