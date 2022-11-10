import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDataComponent } from './create-data/create-data.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { HomeComponent } from './home/home.component';
import { ReadDataComponent } from './read-data/read-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'create-data',component:CreateDataComponent},
{path:'read-data',component:ReadDataComponent},
{path:'update-data',component:UpdateDataComponent},
{path:'delete-data',component:DeleteDataComponent},
{path:'update-data/:id',component:UpdateDataComponent},
{path:'delete-data/:id',component:DeleteDataComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
