import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class NotificationService {

  constructor(private readonly toastr: ToastsManager) {
  }

  init(vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  showSuccess(message: string) {
    this.toastr.success(message, 'Success!');
  }

  showError(message: string) {
    this.toastr.error(message, 'Oops!');
  }

  showWarning(message: string) {
    this.toastr.warning('You are being warned.', 'Alert!');
  }

  showInfo(message: string) {
    this.toastr.info(message);
  }

}
