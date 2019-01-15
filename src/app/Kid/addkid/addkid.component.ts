import { Component, OnInit, Injectable } from '@angular/core';
import { KidService } from '../../services/kid.service';
import { KID } from '../KID';
import { Router } from '@angular/router';



@Component({
  selector: 'app-addkid',
  templateUrl: './addkid.component.html',
  styleUrls: ['./addkid.component.css']
})
@Injectable()
export class AddkidComponent implements OnInit {

  //variables

  kids: KID = {
    id: Math.random().toString().substr(2, 4),
    Name: null,
    BirthDay: null,
    Address: null,
    FatherName: null,
    FatherJop: null,
    FatherPhone: null,
    MotherName: null,
    MotherJop: null,
    MotherPhone: null,
    RecipientName: null,
    RecipientPhone: null,
    Note: null,
    DepartName: null,
    ClassName: null
  };
  Departs = [
    { Name: 'Main Deprt' },
    { Name: 'Naser Depart' },
    { Name: 'Morad Depart' }
  ];
  //const
  constructor(public kidService: KidService, public router: Router) {

  }

  ngOnInit() {

  }

  onSubmit() {
    if (confirm('Are you sure you want to save this kid into the database?')) {
      this.kidService.addkid(this.kids);
      this.kids = {
        id: Math.random().toString().substr(2, 4),
        Name: null,
        BirthDay: null,
        Address: null,
        FatherName: null,
        FatherJop: null,
        FatherPhone: null,
        MotherName: null,
        MotherJop: null,
        MotherPhone: null,
        RecipientName: null,
        RecipientPhone: null,
        Note: null,
        DepartName: null,
        ClassName: null
      };
      this.router.navigate(['viewkids']);
    } else {
      // Do nothing!
    }
  }
}
