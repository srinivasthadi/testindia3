
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { NewTrainingComponent } from './trainings/new-training/new-training.component';
import { PastTrainingsComponent } from './trainings/past-trainings/past-trainings.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'trainings', component: TrainingsComponent, canActivate: [AuthGuard], 
    children : [
      {path: 'new-training', component: NewTrainingComponent},
      {path: 'past-trainings', component: PastTrainingsComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WelcomeComponent, SignupComponent,
                                LoginComponent, TrainingsComponent,
                              NewTrainingComponent, PastTrainingsComponent];
