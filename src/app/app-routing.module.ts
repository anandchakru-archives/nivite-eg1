import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './route-components/home/home.component';
import { PnfComponent } from './route-components/pnf/pnf.component';

const routes: Routes = [
  { path: ':invitePreviewKey', component: HomeComponent },
  { path: ':invitePreviewKey/:customerInviteOid', component: HomeComponent },
  { path: '**', component: PnfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
