import { AuthService } from './../../services/auth.service';
import { Component, OnInit, DoCheck } from '@angular/core';

const DEFAULT_ACTIVE_ITEM = 'home';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit, DoCheck {
  isUserLogged: boolean;
  activeItem: string;
  username: string;

  constructor(
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.activeItem = DEFAULT_ACTIVE_ITEM;
    this.isUserLogged = this.authService.isUserLogged();
    if (this.isUserLogged) {
      this.username = this.authService.getLoggedUserUsername().trim();
    }
  }

  setActiveItem(newActiveItem: string): void {
    console.log(newActiveItem);
    this.activeItem = newActiveItem;
  }

  ngDoCheck(): void {
    this.isUserLogged = this.authService.isUserLogged();
    this.activeItem = this.activeItem || '';
  }
}
