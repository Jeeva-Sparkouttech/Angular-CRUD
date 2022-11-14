import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../Service/crud-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeeData !: any

  constructor(private api : CrudServiceService) { }

  ngOnInit(): void {
    this.getAllEmployee()
  }

  getAllEmployee(){
    this.api.getEmployee()
    .subscribe(res =>{
      this.employeeData = res
    })
  }

}
