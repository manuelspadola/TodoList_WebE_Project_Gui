import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BenutzerList } from '../shared/get-todo-liste-interface';
import { RegisterUserService } from '../shared/register-user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  user: BenutzerList = new BenutzerList(1, "", "");
  message: any;
  nachricht: any;

  constructor(private service: RegisterUserService, private router: Router) { }

  ngOnInit() {
  }

  public registerNow() {
    let resp = this.service.doRegistration(this.user);
    resp.subscribe((data) => this.message = data);
  }

  public loginNow() {
    // alert(this.user.name);
    // alert(this.user.password);
    let resp = this.service.doLogin(this.user);
    resp.subscribe(data => {
      this.nachricht = data;
      //alert(data);
    });
    // window.location.href = "https://google.com/about";
    this.router.navigate(['/home']);
  }
}
