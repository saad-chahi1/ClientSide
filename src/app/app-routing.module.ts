import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './components/componentsClient/setting/setting.component';
import { ProfileComponent } from './components/componentsClient/Profile/profile.component';
import { BillingComponent } from './components/componentsClient/Billing/Billing.component';

const routes: Routes = [
  { path: 'setting', component: SettingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'billing', component: BillingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
