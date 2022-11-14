import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../Service/crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeeData !: any

  constructor(private api : CrudServiceService,private router : Router) { }

  ngOnInit(): void {
    this.getAllEmployee()
  }

  getAllEmployee(){
    this.api.getEmployee()
    .subscribe(res =>{
      this.employeeData = res
    })
  }

  deleteEmployee(employee : any){
    console.log("inside")
    this.api.deleteEmployee(employee.id)
    .subscribe(res =>{
      alert("Employee removed successfully!")
      this.getAllEmployee()
    })
  }

  onEdit(id:any){
    this.router.navigate(['/update-data',id])
  }
}
