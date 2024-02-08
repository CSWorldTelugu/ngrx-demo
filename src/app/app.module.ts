import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './userReducer';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [	
    AppComponent, FormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({user:userReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
