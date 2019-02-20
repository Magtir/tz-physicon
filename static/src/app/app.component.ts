import { Component } from '@angular/core';
import {TargetMouseClickService} from "./lib/target-mouse-click.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private omds: TargetMouseClickService) {

  }

  opOrClMenuDrop(e: any) {
    this.omds.opOrClMenuDrop(e.target.className);
  }
}
