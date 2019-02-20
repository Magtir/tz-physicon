import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RequestServerService {

  onRpl: EventEmitter<any>;

  constructor(private http: HttpClient) {
    this.onRpl = new EventEmitter();
  }

  requestServer(url:string, body:object) {
    this.http.post(url, body)
      .subscribe(
        res => {
          this.onRpl.emit(res);
        },
        error => {
          console.log('Ошибка requestServer:', error.message || error);
        });
  }
}

