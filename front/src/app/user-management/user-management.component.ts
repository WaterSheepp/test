import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { userAdd } from '../models/userAdd';
import { AddUserComponent } from '../user-management/add-user/add-user.component';
import { Router } from '@angular/router'
/* */
import { UserManagementService } from '../shared/user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
  providers: [UserService, UserManagementComponent]
})
export class UserManagementComponent implements OnInit {

  showVar: boolean = true;

  toggleChild() {

    this.showVar = !this.showVar;
  }

  constructor(private UserService: UserService, public managementService: UserManagementService, private router: Router) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshUserList();
  }

  resetForm() {

    this.UserService.selectedUser = {
      _id: '',
      user_name: '',
      name: '',
      sur_name: '',
      password: '',
      carnet: '',
      rol: ''
    }
  }
  
  refreshUserList() {

    this.managementService.getUsers().subscribe((
      
      res =>{
        
        console.log(res);
        this.managementService.userAdd = res.foundUsers as userAdd[];
        
      }
      
      ));
  }

  onClick(emp: userAdd) {

    console.log(emp);
    
    emp = this.managementService.showUsers;

  }

}
