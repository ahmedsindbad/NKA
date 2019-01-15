import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  CodeKid: string;
  constructor(public router: Router) {
  }

  ngOnInit() {
  }
  onRoutActivity() {
   this.router.navigate(['/viewkids', this.CodeKid]);
  // alert(this.CodeKid);
  // console.log(this.CodeKid);
}
}
