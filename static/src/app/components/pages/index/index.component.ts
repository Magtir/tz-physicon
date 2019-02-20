import {Component, OnInit} from '@angular/core';
import {RequestServerService} from "../../../lib/request-server.service";
import {NewFilterService} from "./filter/new-filter.service";

@Component({
  selector: 'page-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {

  newFilterArr: {
    list: any,
    selectCurrency: string
    searchFlag: boolean
  };

  constructor(private rs: RequestServerService, private nfs: NewFilterService) {
    this.newFilterArr = {
      list: [],
      selectCurrency: '',
      searchFlag: false
    };

    this.nfs.newFilterArr.subscribe((filterArr: any) => this.newFilterArr = filterArr);
  }

  getFormatGrade(grade: string) {
    let arr = grade.split(';');
    if (arr.length > 1) {
      return arr[0] + '-' + arr[arr.length - 1] + ' классы';
    } else {
      return grade + ' класс'
    }
  }

  ngOnInit() {
    this.rs.requestServer('http://krapipl.imumk.ru:8082/api/mobilev1/update', {'data': ''});
  }
}
