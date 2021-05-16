import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { SettingComponent } from './components/componentsClient/setting/setting.component';
import { ProfileComponent } from './components/componentsClient/profile/profile.component';
import { BillingComponent } from './components/componentsClient/billing/billing.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClientProfileComponent,
    SettingComponent,
    ProfileComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
