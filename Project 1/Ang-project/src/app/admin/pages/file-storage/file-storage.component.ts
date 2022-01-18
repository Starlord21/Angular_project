import { Component, OnInit } from '@angular/core';
import { FiletypeService } from '../../service/filetype.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-file-storage',
  templateUrl: './file-storage.component.html',
  styleUrls: ['./file-storage.component.css']
})
export class FileStorageComponent implements OnInit {
fileInfo:any=[]
fileForm:FormGroup
checkpass=false;

// editForm:FormGroup
// checkform=false
  constructor(private _filetype : FiletypeService,private _fb :FormBuilder, private _actRoute : ActivatedRoute) 
  {
   
    this.fileForm=this._fb.group
    ({
      _id : [""],
      icon :["",Validators.required],
      type_name :["",Validators.required],
      type :["",Validators.required],
      
    }),
    // this.editForm = this._fb.group
    // ({
    //   icon :["",Validators.required],
    //   type_name :["",Validators.required],
    //   type :["",Validators.required],
    // }),

    this._filetype.getfile().subscribe(result=>{
      console.log(result)
      this.fileInfo=result
      // this.fileForm.setValue(result)
    });
  
   }

  ngOnInit(): void {
  }
  submit(btn:any)
  {
    if(this.fileForm.controls._id.value == '')
    {
      if(this.fileForm.invalid)
    {
      this.checkpass=true;
        return
    }
    else
    {
      this._filetype.addfile(this.fileForm.value).subscribe(result=>{
        console.log(result)
        window.location.reload()

        
      }) 
      btn.click()
    }
    }
    else
    {
      this._filetype.update(this.fileForm.controls._id.value,this.fileForm.value).subscribe(result=>{
        console.log(result)
        window.location.reload()
      })
      btn.click()
    }
  }
  delfile(obj:any)
  {
    // console.log(obj._id)
    this._filetype.deleteFile(obj._id).subscribe(result=>{
      console.log(result)
      let n = this.fileInfo.indexOf(obj)
      this.fileInfo.splice(n,1)
    })
  }

  editfile(obj:any)
  {
    // console.log(obj)
    
    this._filetype.get(obj._id).subscribe(result=>{
      console.log(result)
      this.fileForm.setValue(result)
    })
    
  }
}
