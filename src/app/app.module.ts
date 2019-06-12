import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RedditComponent } from './components/reddit/reddit.component';
import { RedditDetailComponent } from './components/reddit-detail/reddit-detail.component';
import { ApiService } from './service/api.service';

@NgModule({
  declarations: [
    AppComponent,
    RedditComponent,
    RedditDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
