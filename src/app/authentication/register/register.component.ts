import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { UsersService } from './../../services/users.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  onRegisterSubmit(): void {
    console.log(this.user, 'registering');
    this.usersService.registerUser(this.user)
      .map(r => r.json())
      .subscribe((responseObject) => {
        console.log(`User ${this.user.username} registered successfully!`);
        this.router.navigateByUrl('/auth/login');
      }, (err) => {
        console.log(err);
      });
  }
}
