import { Component, OnInit } from '@angular/core';
import { KidService} from '../../services/kid.service';
import { KID } from '../KID';


@Component({
  selector: 'app-viewkids',
  templateUrl: './viewkids.component.html',
  styleUrls: ['./viewkids.component.css']
})
export class ViewkidsComponent implements OnInit {

  //variables
  kids:KID[];
  //const
  constructor(public kidService: KidService) { }

  ngOnInit() {
    this.kidService.GetItem().subscribe(Kids=>{
      //console.log(Kids);
      this.kids = Kids;
    });
  }

}
