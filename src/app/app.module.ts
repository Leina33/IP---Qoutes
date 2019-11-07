import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QouteComponent } from './qoute/qoute.component';
import { QouteDetailComponent } from './qoute-detail/qoute-detail.component';
import { DateCountPipe } from './date-count.pipe';
import { QouteFormComponent } from './qoute-form/qoute-form.component';
import { LikeComponent } from './like/like.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QouteComponent,
    QouteDetailComponent,
    DateCountPipe,
    QouteFormComponent,
    LikeComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
