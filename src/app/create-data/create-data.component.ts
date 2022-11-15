import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { EmployeeModel } from '../employee.model';
import { CrudServiceService } from '../Service/crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent implements OnInit {

  angForm !: FormGroup
  employeeModalObj : EmployeeModel = new EmployeeModel()

  constructor(private formBuilder : FormBuilder,private api : CrudServiceService , private router:Router) { }

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

  async postEmployeeDetails(){
    this.employeeModalObj.id = this.angForm.value.id
    this.employeeModalObj.firstName = this.angForm.value.firstName
    this.employeeModalObj.lastName = this.angForm.value.lastName
    this.employeeModalObj.email = this.angForm.value.email
    this.employeeModalObj.gender = this.angForm.value.gender
    this.employeeModalObj.mobile = this.angForm.value.mobile
    
    await this.api.postEmployee(this.employeeModalObj)
    .subscribe(res=>{
      console.log(res)
       alert("Employee added successfully")
      this.angForm.reset()
    },
    err=>{
      console.log(err)
      alert("Something went wrong")
    })

    await this.router.navigate(['/home'])
  }
}
