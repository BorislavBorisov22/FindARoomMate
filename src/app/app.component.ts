import { NotificationService } from './services/notification.service';
import { UsersService } from './services/users.service';
import { Component, OnInit, ViewContainerRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnChanges {

  constructor(private readonly notificationService: NotificationService,
    private readonly vcr: ViewContainerRef) {
    this.notificationService.init(vcr);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('do changes');
  }
}
