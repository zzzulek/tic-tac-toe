import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
    { path:  '', component:  HomeComponent, canActivate: [LoginGuard]},
    { path:  'home', component:  HomeComponent, canActivate: [LoginGuard]},
    { path:  'login', component:  LoginComponent},
    { path:  'signup', component:  SignupComponent},
    { path:  'game', component:  GameComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
