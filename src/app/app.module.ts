import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import * as firebase from 'firebase/app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyD67yjNogAQJE7EuW5a_i_8vOKbDMaosMw',
      authDomain: 'todo-3d609.firebaseapp.com',
      databaseURL: 'https://todo-3d609.firebaseio.com',
      projectId: 'todo-3d609',
      storageBucket: 'todo-3d609.appspot.com',
      messagingSenderId: '917446049184',
      appId: '1:917446049184:web:f4e3b5bf417cf89713b8c5',
      measurementId: 'G-NQQ0BLETKV',
    };
    firebase.initializeApp(firebaseConfig);
  }
}
