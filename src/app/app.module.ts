import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { ReadDataComponent } from './read-data/read-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateDataComponent,
    ReadDataComponent,
    UpdateDataComponent,
    DeleteDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
