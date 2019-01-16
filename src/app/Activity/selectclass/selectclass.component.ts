import { Component, OnInit } from '@angular/core';
import { CLASS } from '../CLASS';
import { Router } from '@angular/router';
import { ClassService } from '../../services/class.service';

@Component({
  selector: 'app-selectclass',
  templateUrl: './selectclass.component.html',
  styleUrls: ['./selectclass.component.css']
})
export class SelectclassComponent implements OnInit {

  classes: CLASS[];
  selectedValue: any = null;
  errorValidate: any = 'select one class to add activity to it.';
  // const
  constructor(public classService: ClassService, public router: Router) {
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
  onSubmit() {
    if (this.selectedValue === null) {
      this.errorValidate = 'لابد من اختيار الفصل أولا';
    } else {
      this.errorValidate = 'select one class to add activity to it.';
      alert(this.selectedValue);
      this.router.navigate(['/selectclass', this.selectedValue]);
    }
  }
}
