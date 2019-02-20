import {Component, OnInit} from '@angular/core';
import {RequestServerService} from "../../../../lib/request-server.service";
import {NewFilterService} from "./new-filter.service";

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  rpl: any;
  subjects: string[];
  genres: string[];
  grades: string[];

  selectSubject: string;
  selectGenre: string;
  selectGrade: string;
  selectTitle: string;
  selectCurrency: string;

  searchFlag: boolean;

  constructor(private rs: RequestServerService, private nfs: NewFilterService) {
    this.rs.onRpl.subscribe((rpl:any) => {this.rpl = rpl; this.sort()});

    this.subjects = [];
    this.genres = [];
    this.grades = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

    this.selectSubject = '';
    this.selectGenre = '';
    this.selectGrade = '';
    this.selectTitle = '';
    this.selectCurrency = 'RUB';

    this.searchFlag = false;
  }

  getSubjects(): string[] {
    if (this.subjects.length == 0) {
      this.parseRpl();
    }
    return this.subjects;
  }

  getGenres(): string[] {
    if (this.genres.length == 0) {
      this.parseRpl();
    }
    return this.genres;
  }

  getGrades(): string[] {
    return this.grades;
  }

  changeCurrency(e:any) {
    this.selectCurrency = e.target.value;
    this.sort();
  }

  parseRpl() {
    if (this.rpl) {
      for (let i in this.rpl.items) {
        let item = this.rpl.items[i];

        if (this.subjects.indexOf(item.subject) == -1) {
          this.subjects.push(item.subject);
        }

        if (this.genres.indexOf(item.genre) == -1) {
          this.genres.push(item.genre);
        }
      }
    }
  }

  changeFilter(e:any, what:string) {
    let val = e.target ? e.target.value : e;

    switch (what) {
      case 'subject':
        this.selectSubject = val;
        break;

      case 'genre':
        this.selectGenre = val;
        break;

      case 'grade':
        this.selectGrade = val;
        break;

      case 'title':
        this.selectTitle = val;
        break;
    }

    this.searchFlag = val != '';

    this.sort();
  }

  sort() {
    let selectSubject = this.selectSubject;
    let selectGenre = this.selectGenre;
    let selectGrade = this.selectGrade;
    let selectTitle = this.selectTitle;

    let filterArr = this.rpl.items.filter((item:any) => {
      switch (false) {
        case selectSubject == '' ? true : item.subject == selectSubject:
          return;

        case selectGenre == '' ? true : item.genre == selectGenre:
          return;

        case selectGrade == '' ? true : item.grade.split(';').indexOf(selectGrade) != -1:
          return;

        case selectTitle == '' ? true : item.title.indexOf(selectTitle) != -1:
          return;
      }

      return true;
    });

    let out = {
      list: filterArr,
      selectCurrency: this.selectCurrency,
      searchFlag: this.searchFlag
    };
    this.nfs.setNewFilter(out);
  }

  ngOnInit() {
  }

}
