import { Component, OnInit } from '@angular/core';
import { KidService} from '../../services/kid.service';
import { KID } from '../KID';
import { EATING } from '../../Activity/EATING';
import { EVENT } from '../../Activity/EVENT';
import { CLASS } from '../../Activity/CLASS';
import { ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-viewkids',
  templateUrl: './viewkids.component.html',
  styleUrls: ['./viewkids.component.css']
})
export class ViewkidsComponent implements OnInit {

  // variables
  kids: KID[];
  eatings: EATING[];
  events: EVENT[];
  classes: CLASS[];

  kidid: any;
  showSpinner = true;
  // const
  constructor(public kidService: KidService, private route: ActivatedRoute) {
    this.showSpinner = true;
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.kidid = param.get('id');
      this.showSpinner = false;
    });
  }

  ngOnInit() {

    this.kidService.GetSampleKids(this.kidid).subscribe(Kids => {
      this.showSpinner = true;
      // console.log(Kids);
      this.kids = Kids;
      this.showSpinner = false;
    });


  }
  onDetails(KCGUID: string, kidid: string) {
    this.showSpinner = true;
    this.kidService.GetEventKids(KCGUID).subscribe(events => {
      this.events = events;
      this.showSpinner = false;
    });
    this.kidService.GetEatKids(kidid).subscribe(eats => {
      this.showSpinner = true;
      this.eatings = eats;
      this.showSpinner = false;
      // console.log(this.eatings);
    });

    }
}
