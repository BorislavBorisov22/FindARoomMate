import { UserStorageService } from './../../services/user-storage.service';
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
    private readonly userStorageService: UserStorageService) {
  }

  ngOnInit(): void {
    this.activeItem = DEFAULT_ACTIVE_ITEM;
    this.isUserLogged = this.userStorageService.isUserLogged();
    if (this.isUserLogged) {
      this.username = this.userStorageService.getLoggedUserUsername().trim();
    }
  }

  setActiveItem(newActiveItem: string): void {
    this.activeItem = newActiveItem;
  }

  ngDoCheck(): void {
    this.isUserLogged = this.userStorageService.isUserLogged();
    this.activeItem = this.activeItem || '';
  }
}
