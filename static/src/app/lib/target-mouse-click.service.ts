import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class TargetMouseClickService {

  eventOpOrClMenuDrop: EventEmitter<string>;

  constructor() {
    this.eventOpOrClMenuDrop = new EventEmitter();
  }

  opOrClMenuDrop(onClick: string) {
    this.eventOpOrClMenuDrop.emit(onClick);
  }
}

