import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ValidationUsingServiceComponent } from './validation-using-service/validation-using-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateDataComponent,
    UpdateDataComponent,
    ValidationUsingServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
