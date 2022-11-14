import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { EmployeeModel } from '../employee.model';
import { CrudServiceService } from '../Service/crud-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {

  data !: any
  public empId:any

  angForm !: FormGroup

  constructor(private formBuilder : FormBuilder,private api : CrudServiceService,private route  :ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.empId = id

    this.angForm = this.formBuilder.group({
      id : [''],
      firstName : [''],
      lastName : [''],
      email :[''],
      gender : [''],
      mobile : ['']
    })

    this.defaultValue()
  }

  defaultValue(){
    this.api.getSingleEmployee(this.empId)
    .subscribe(res =>{
      this.data = res
    })

    console.log(this.data)
    console.log('====================================');
    console.log(this.empId);
    console.log('====================================');

    this.angForm.controls['id'].setValue(this.data.id)
    this.angForm.controls['firstName'].setValue(this.data.firstName)
    this.angForm.controls['lastName'].setValue(this.data.lastName)
    this.angForm.controls['email'].setValue(this.data.email)
    this.angForm.controls['gender'].setValue(this.data.gender)
    this.angForm.controls['mobile'].setValue(this.data.mobile)
  }

}
