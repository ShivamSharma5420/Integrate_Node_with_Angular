import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(protected webServ: WebService, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
  }

  form = this.formBuilder.group({
    user_id: ['', [Validators.required]],
    password: ['', [Validators.required]],  //first element in the array is the default value and second is the validator or a list of validators
    confirmPassword: ['', [Validators.required]]

  });

  clickToRegister() {
    if (this.form.value.password != this.form.value.confirmPassword) {
      alert("password and confirm password not matching")
    }
    else {

      this.webServ.registerUser(this.form.value).subscribe((data) => {
        console.log(data.message);
        alert(data.message);

      },
        (error) => console.log(error));


    }
  }

}
