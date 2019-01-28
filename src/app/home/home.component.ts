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
    if (this.CodeKid) {
      this.router.navigate(['/viewkids', this.CodeKid]);
    }
  // alert(this.CodeKid);
  // console.log(this.CodeKid);
}
scrollTo(uniqueID: any) {
  const elmnt = document.getElementById(uniqueID); // let if use typescript
  elmnt.scrollIntoView(); // this will scroll elem to the top
  window.scrollTo(0, 0); // this will scroll page to the top
}
}
