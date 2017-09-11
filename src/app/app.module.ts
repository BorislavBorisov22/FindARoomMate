import { SortPipe } from './shared/pipes/sort.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from 'ng2-toastr/ng2-toastr';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    NgbModule.forRoot(),
    SharedModule,
    ToastModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
