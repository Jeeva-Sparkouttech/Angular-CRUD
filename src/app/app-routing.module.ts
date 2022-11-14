import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDataComponent } from './create-data/create-data.component';
import { HomeComponent } from './home/home.component';
import { UpdateDataComponent } from './update-data/update-data.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'create-data',component:CreateDataComponent},
{path:'update-data/:id',component:UpdateDataComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
