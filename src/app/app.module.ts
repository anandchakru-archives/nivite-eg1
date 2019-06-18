import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AtomSpinnerModule } from 'angular-epic-spinners';
import { CarouseliComponent } from './util-components/carouseli/carouseli.component';
import { LoadingComponent } from './util-components/loading/loading.component';
import { HomeComponent } from './route-components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PnfComponent } from './route-components/pnf/pnf.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    CarouseliComponent,
    LoadingComponent,
    HomeComponent,
    PnfComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AtomSpinnerModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
