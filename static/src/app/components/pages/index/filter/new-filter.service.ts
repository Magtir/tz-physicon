import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class NewFilterService {

  newFilterArr: EventEmitter<any>;

  constructor() {
    this.newFilterArr = new EventEmitter();
  }

  setNewFilter(newFilterArr:any) {
    this.newFilterArr.emit(newFilterArr);
  }
}
