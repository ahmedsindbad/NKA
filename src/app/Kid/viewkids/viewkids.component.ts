import { Component, OnInit } from '@angular/core';
import { KidService} from '../../services/kid.service';
import { KID } from '../KID';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { onErrorResumeNextStatic } from 'rxjs/internal/operators/onErrorResumeNext';


@Component({
  selector: 'app-viewkids',
  templateUrl: './viewkids.component.html',
  styleUrls: ['./viewkids.component.css']
})
export class ViewkidsComponent implements OnInit {

  // variables
  kids: KID[];
  id: any;
  // const
  constructor(public kidService: KidService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.id = param.get('id');
    });
  }

  ngOnInit() {

    this.kidService.GetItem().subscribe(Kids => {
      // console.log(Kids);
      this.kids = Kids;
    });
  }
  onTest() {
    alert(this.id);
    }
}
