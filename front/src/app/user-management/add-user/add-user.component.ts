import { Component, OnInit } from '@angular/core';
import { UserManagementService } from 'src/app/shared/user-management.service';
import { UserService } from '../../shared/user.service';
import { UserManagementComponent } from '../../user-management/user-management.component';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UserService, UserManagementService]
})
export class AddUserComponent implements OnInit {

  showSuccesMessage: Boolean
  serverErrorMessage: String

  constructor(public UserService: UserService, private userManagement: UserManagementComponent) { }

  ngOnInit(): void {
    
  }

  onSubmit() {

    this.UserService.createUser( this.UserService.selectedUser ).subscribe(
      res => {

        this.showSuccesMessage = true;
        setTimeout(() => this.showSuccesMessage = false, 3000)
        this.userManagement.refreshUserList();
        this.resetForm();

      },
      err => {
        if (err.status === 404 ) {
          this.serverErrorMessage = err.error.join('<br/>')
        }else{
          this.serverErrorMessage = 'something went wrong!'
        }
      }
    ); 
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
}
