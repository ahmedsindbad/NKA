import { Component, OnInit } from '@angular/core';
import { CLASS } from '../CLASS';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ClassService} from '../../services/class.service';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-selectclass',
  templateUrl: './selectclass.component.html',
  styleUrls: ['./selectclass.component.css']
})
export class SelectclassComponent implements OnInit {

  classes: CLASS[];
  selectedValue: null;
  // const
  constructor(public classService: ClassService, private route: ActivatedRoute) {
    // this.route.paramMap.subscribe((param: ParamMap) => {
    //   this.id = param.get('id');
    // });
  }

  ngOnInit() {
    this.classService.GetItem().subscribe(Classes => {
      this.classes = Classes;
      console.log(this.classes);
    });
  }

}
