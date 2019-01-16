import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { KID } from '../../Kid/KID';
import { ActiveService } from '../../services/active.service';

@Component({
  selector: 'app-activeform',
  templateUrl: './activeform.component.html',
  styleUrls: ['./activeform.component.css']
})
export class ActiveformComponent implements OnInit {
  KIDS: KID[];
  CGUID: any;


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

}
