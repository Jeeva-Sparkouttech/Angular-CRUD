import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-CRUD';

  constructor(private router:Router,private activated:ActivatedRoute) { }

  relative(){
    this.router.navigate(['/create-data'],{relativeTo : this.activated})
  }
}
