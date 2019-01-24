import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EVENT } from '../EVENT';
import { CLASS } from '../CLASS';
import { DailyeventService } from '../../services/dailyevent.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dailyevents',
  templateUrl: './dailyevents.component.html',
  styleUrls: ['./dailyevents.component.css']
})
export class DailyeventsComponent implements OnInit {
  CGUID: any;
  eventos: EVENT[];
  CLASSES: CLASS[] = [{
    key: null,
    CDGUID: null,
    CGUID: null,
    ClassName: null,
    DepartID: null,
    id: null
  }];
  EVENTS: EVENT;
  constructor(private route: ActivatedRoute, public dailyeventservice: DailyeventService) {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.CGUID = param.get('CGUID');
    });

    this.dailyeventservice.GetClassByID(this.CGUID).subscribe(Class => {
    // console.log(Class);
    this.CLASSES = Class[0];
    // console.log(this.CLASSES);
    });

    this.EVENTS = {
        timefrom: '08:00',
        timeto: '09:00',
        txtactivity: null
    };

    this.dailyeventservice.GetEventsByClassId(this.CGUID).subscribe(Eventos => {
       // console.log(Eventos);
       // const mapped = Object.entries(obj).map(([type, value]) => ({type, value}));
       this.eventos = Eventos;
     });
   }
  ngOnInit() {

  }
onSubmit() {
  if (confirm('Are you sure you want to save this event into the database?')) {
    console.log(this.eventos);
    this.dailyeventservice.addEvent(this.EVENTS, this.CGUID);
    this.EVENTS = {
        timefrom: '08:00',
        timeto: '09:00',
        txtactivity: null
    };
    // this.router.navigate(['viewkids']);
  } else {
    // Do nothing!
  }
}
onEventDelete(id: any) {
  if (confirm('Are you sure you want to delete this event from the database?')) {
    this.dailyeventservice.EventDelete(this.CGUID, id);
  }
}
}
