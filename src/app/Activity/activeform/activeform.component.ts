import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { KID } from '../../Kid/KID';
import { ActiveService } from '../../services/active.service';
import { EVENTS } from '../EVENTS';

@Component({
  selector: 'app-activeform',
  templateUrl: './activeform.component.html',
  styleUrls: ['./activeform.component.css']
})
export class ActiveformComponent implements OnInit {
  KIDS: KID[];
  CGUID: any;

  events: EVENTS = {
    key: null,
    date: null,
    classid: null,
    kidid: null,
    eating: [],
    eve: [{
        title: null,
        starttime: [{hour: null, minute: null}],
        endtime: [{hour: null, minute: null}]
    }]
  };
  // timeStart = {hour: 12, minute: 5};
  // timeEnd = {hour: 13, minute: 30};
  constructor(private route: ActivatedRoute, public activeService: ActiveService) {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.CGUID = param.get('CGUID');
    });
   }

  ngOnInit() {
    this.activeService.GetItem(this.CGUID).subscribe(kids => {
      console.log(kids);
      this.KIDS = kids;
    });
  }

onShow(kid: KID) {
  console.log(this.events);
  console.log(kid);
}
}
