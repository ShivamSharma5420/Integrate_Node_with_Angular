import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(protected webServ: WebService, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
  }

  form = this.formBuilder.group({
    user_id: ['', [Validators.required]],
    password: ['', [Validators.required]],  //first element in the array is the default value and second is the validator or a list of validators


  });
  clickToLogin() {
    //alert("Login Functionality " + this.form.value.user_id);
    this.webServ.checkUser(this.form.value).subscribe((data) => {
      console.log(data.message);
      alert(data.message);
      if (data.message === "Valid User")
        this.route.navigate(['/home'])
    },
      (error) => console.log(error));

    // this.route.navigate(['/home']);

  }


}
