import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { AuthGuardService } from './services/authGuardService/auth-guard.service';


const routes: Routes = [
  { path:'', component: LoginComponent},
  { path: 'registration', 
    component: RegistrationComponent },
  { path: 'login', 
    component: LoginComponent
  },
  { path: 'list', 
    component: ListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./../app/components/user-profile/user-profile.module').then(m => m.UserProfileModule),
    canActivate: [AuthGuardService]
  },
  { path: '', redirectTo: '/registration', pathMatch: 'full'},
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
