import { NotificationService } from './services/notification.service';
import { UsersService } from './services/users.service';
import { Component, OnInit, ViewContainerRef, OnChanges, SimpleChanges } from '@angular/core';

const LOADER_TIMEOUT = 1000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public loaderHidden;

  constructor(private readonly notificationService: NotificationService,
    private readonly vcr: ViewContainerRef) {
    this.notificationService.init(vcr);
  }

  ngOnInit(): void {
    this.loaderHidden = true;
  }

  onRouteChange() {
    this.loaderHidden = false;
    setTimeout(() => {
      this.loaderHidden = true;
    }, LOADER_TIMEOUT);
  }
}
