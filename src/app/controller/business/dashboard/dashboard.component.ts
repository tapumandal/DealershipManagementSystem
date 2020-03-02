import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { 
    // this.activatedRoute.queryParams.subscribe(params => {
    //     let businessName = params['business-name'];
    //     console.log(businessName); // Print the parameter to the console. 
    // });
   }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.paramMap.get('business-name'));
  }

}
