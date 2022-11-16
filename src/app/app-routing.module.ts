import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDataComponent } from './create-data/create-data.component';
import { HomeComponent } from './home/home.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { ValidationUsingServiceComponent } from './validation-using-service/validation-using-service.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'create-data',component:CreateDataComponent},
{path:'update-data/:id',component:UpdateDataComponent},
{path : 'validation-service',component : ValidationUsingServiceComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent,
  CreateDataComponent,
  UpdateDataComponent,
  ValidationUsingServiceComponent]