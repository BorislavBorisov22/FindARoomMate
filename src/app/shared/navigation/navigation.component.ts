import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

const DEFAULT_ACTIVE_ITEM = 'home';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  isUserLogged: boolean;
  activeItem: string;
  username: string;

  constructor(
    private authService: AuthService) {
  }

  ngOnInit() {
    this.activeItem = DEFAULT_ACTIVE_ITEM;
    this.isUserLogged = this.authService.isUserLogged();
    if (this.isUserLogged) {
      this.username = this.authService.getLoggedUserUsername();
    }
  }

  setActiveItem(newActiveItem: string) {
    console.log(newActiveItem);
    this.activeItem = newActiveItem;
  }
}
