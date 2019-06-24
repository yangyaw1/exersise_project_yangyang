import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestListComponent } from './components/test-list/test-list.component';
import { TestDetailComponent } from './components/test-detail/test-detail.component';
import { AddTestComponent } from './components/add-test/add-test.component';
import { ChatboxComponent } from './components/chatbox/chatbox.component';

@NgModule({
  declarations: [
    AppComponent,
    TestListComponent,
    TestDetailComponent,
    AddTestComponent,
    ChatboxComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    MatRadioModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
