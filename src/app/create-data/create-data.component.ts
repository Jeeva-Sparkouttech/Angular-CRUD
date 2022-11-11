import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';
import { EmployeeModel } from '../employee.model';
import { CrudServiceService } from '../Service/crud-service.service';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent implements OnInit {

  angForm !: FormGroup
  employeeModalObj : EmployeeModel = new EmployeeModel()

  constructor(private formBuilder : FormBuilder,private api : CrudServiceService) { }

  ngOnInit(): void {
    this.angForm = this.formBuilder.group({
      id : [''],
      firstName : [''],
      lastName : [''],
      email :[''],
      gender : [''],
      mobile : ['']
    })
  }

  postEmployeeDetails(){
    this.employeeModalObj.id = this.angForm.value.id
    this.employeeModalObj.firstName = this.angForm.value.firstName
    this.employeeModalObj.lastName = this.angForm.value.lastName
    this.employeeModalObj.email = this.angForm.value.email
    this.employeeModalObj.gender = this.angForm.value.gender
    this.employeeModalObj.mobile = this.angForm.value.mobile
  }
}
