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
  // const
  constructor(public kidService: KidService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.kidid = param.get('id');
    });
  }

  ngOnInit() {

    this.kidService.GetSampleKids(this.kidid).subscribe(Kids => {
      // console.log(Kids);
      this.kids = Kids;
    });


  }
  onDetails(KCGUID: string, kidid: string) {
    this.kidService.GetEventKids(KCGUID).subscribe(events => {
      this.events = events;
    });
    this.kidService.GetEatKids(kidid).subscribe(eats => {
      this.eatings = eats;
      console.log(this.eatings);
    });

    }
}
