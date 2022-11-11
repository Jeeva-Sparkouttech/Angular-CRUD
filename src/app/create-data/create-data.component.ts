import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent implements OnInit {

  angForm !: FormGroup

  constructor(private formBuilder : FormBuilder) { }

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

}
