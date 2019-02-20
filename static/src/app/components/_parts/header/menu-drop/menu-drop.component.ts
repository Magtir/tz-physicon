import { Component, OnInit } from '@angular/core';
import {TargetMouseClickService} from "../../../../lib/target-mouse-click.service";

@Component({
  selector: 'menu-drop',
  templateUrl: './menu-drop.component.html',
  styleUrls: ['./menu-drop.component.scss']
})
export class MenuDropComponent implements OnInit {

  open:boolean = false;
  classNameIconOpener:string;

  constructor(private omds: TargetMouseClickService) {
    this.classNameIconOpener = 'menu-drop-icon';
    this.omds.eventOpOrClMenuDrop.subscribe(
      (className:string) => {
        className == this.classNameIconOpener ? this.open = !this.open : this.open = false;
      }
      );
  }

  ngOnInit() {
  }

  clickBack() {
    return false;
  }

}
