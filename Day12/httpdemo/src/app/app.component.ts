import { Component ,OnInit} from '@angular/core';
import { User } from './Models/User';
import { UserServiceService } from './user-service.service';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'httpdemo';
  userList:Array<User>=[];
  userForm!:FormGroup
  ngOnInit()
  {
    this.userForm=new FormGroup(
      {
        id:new FormControl(),
        name:new FormControl(),
        email:new FormControl(),
        gender:new FormControl(),
        status:new FormControl()
      }
    );
      this.getlist();
  }
  getlist()
  {
    this.userservice.getUser().subscribe((users:Array<User>)=>{this.userList=users})
  }
  constructor(private userservice:UserServiceService)
  {

  }
  submitinfo()
  {
    this.userservice.postUser(this.userForm.value).subscribe((data=>console.log(data)));
    this.getlist();
  }
  editnfo(user:User)
  {
    this.getlist();

 let userinfo=  this.userList.find(p=>p.id===user.id);

this.userForm.setValue({name:userinfo?.name,email:userinfo?.email,gender:userinfo?.gender,status:userinfo?.status,id:userinfo?.id});
  }
  editinfo()
  {
    this.userservice.putUser(this.userForm.value).subscribe((data)=>console.log(data));
    this.getlist();
  }
}
