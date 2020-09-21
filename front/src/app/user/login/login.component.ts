import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { UserService} from '../../shared/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  model = {
    user_name: '',
    password: ''
  }

  serverErrorMessage: string;

  ngOnInit(): void {

  }

  onSubmit(){
    this.userService.login(this.model).subscribe(
      res => {

        this.userService.isLogedIn();
        this.router.navigateByUrl('/homePage');
        
      },
      err => {

        this.serverErrorMessage = err.error.message;

      }
    );
  }
}
