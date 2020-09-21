import { Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { LoginComponent } from '../user/login/login.component';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../auth/auth.guard';
import { AddUserComponent } from '../user-management/add-user/add-user.component'
import { UserManagementComponent } from '../user-management/user-management.component';
import { EditUserComponent } from '../user-management/edit-user/edit-user.component';
import { from } from 'rxjs';

export const appRoutes: Routes = [
    {
        path: 'login', component: LoginComponent,
        children: [{path: '', component: UserComponent}]
    },

    {
        path: 'homePage', component: HomeComponent, canActivate: [AuthGuard]
    },

    {
        path: 'editUser', component:EditUserComponent
    },

    {
        path:'', redirectTo: '/login', pathMatch: 'full'
    },

    {
        path: 'userManagement', component: UserManagementComponent,
        children: [{ path: '/addUser', component: AddUserComponent}],
    },

    {
        path: 'userManagement', component: UserManagementComponent,
        children: [{ path: '/editUser', component: EditUserComponent }]
    }
    
];