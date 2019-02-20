import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { IndexComponent } from './components/pages/index/index.component';
import { HeaderComponent } from './components/_parts/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {RequestServerService} from "./lib/request-server.service";
import { MenuDropComponent } from './components/_parts/header/menu-drop/menu-drop.component';
import { FilterComponent } from './components/pages/index/filter/filter.component';
import {NewFilterService} from "./components/pages/index/filter/new-filter.service";
import {TargetMouseClickService} from "./lib/target-mouse-click.service";

const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  // {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,

    //_parts
    HeaderComponent,

    //pages
    IndexComponent,

    MenuDropComponent,

    FilterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    RequestServerService,
    NewFilterService,
    TargetMouseClickService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
