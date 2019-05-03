import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthserviceService } from 'src/app/authservice/authservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;
  maxDate: any;

  constructor(private authService: AuthserviceService){

  };

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm){
    this.email = form.value.email;
    this.password = form.value.password;
    this.authService.createUser(this.email, this.password);
  }
}
