import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/authservice/authservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(public authService: AuthserviceService) { 

  }

  ngOnInit() {
  }

  onSubmit(formData: NgForm){
    if(formData.valid){
      this.email = formData.value.email;
      this.password = formData.value.password;
      this.authService.login(this.email, this.password);
    }
  }

  googleLogin(){
    this.authService.loginWithGoogle();
  }

}
