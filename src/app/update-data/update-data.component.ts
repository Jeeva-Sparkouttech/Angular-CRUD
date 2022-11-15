import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { CrudServiceService } from '../Service/crud-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from '../employee.model';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {
  submitted = false
  public data: any
  public empId:any

  angForm !: FormGroup
  empData : EmployeeModel = new EmployeeModel()

  constructor(private formBuilder:FormBuilder,private api:CrudServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.empId = id

    this.angForm = this.formBuilder.group({
      id : ['',Validators.required],
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      email :['',[Validators.required,Validators.email]],
      gender : ['',Validators.required],
      mobile : ['',Validators.required]
    })

    this.defaultValue()
  }

   async defaultValue(){

     await this.api.getSingleEmployee(this.empId)
    .subscribe(res =>{
      this.data = res

     this.angForm.controls['id'].setValue(this.data.id)
     this.angForm.controls['firstName'].setValue(this.data.firstName)
     this.angForm.controls['lastName'].setValue(this.data.lastName)
     this.angForm.controls['email'].setValue(this.data.email)
     this.angForm.controls['gender'].setValue(this.data.gender)
     this.angForm.controls['mobile'].setValue(this.data.mobile)
    })
  }

  async updateEmployee(){
    this.submitted = true
    if(this.angForm.valid){
    this.empData.id = this.angForm.value.id
    this.empData.firstName = this.angForm.value.firstName
    this.empData.lastName = this.angForm.value.lastName
    this.empData.email = this.angForm.value.email
    this.empData.gender = this.angForm.value.gender
    this.empData.mobile = this.angForm.value.mobile

    await this.api.updateEmployee(this.empData , this.empId)
    .subscribe(res =>{
      console.log(res)
      alert("Employee updated successfully")
    },
    err=>{
      console.log(err)
      alert("Something went wrong")
    })

    await this.router.navigate(['/home'])
  }
}
}
