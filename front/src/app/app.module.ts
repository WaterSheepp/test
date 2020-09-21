import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { AuthGuard } from './auth/auth.guard';
import { from } from 'rxjs';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { appRoutes } from './routes/routes'
import { FormsModule } from '@angular/forms'
import { UserService } from './shared/user.service';
import { HomeComponent } from './home/home.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AddUserComponent } from './user-management/add-user/add-user.component';
import { UserManagementService } from '../app/shared/user-management.service';
import { EditUserComponent } from './user-management/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    UserManagementComponent,
    AddUserComponent,
    EditUserComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [UserService, UserManagementService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


