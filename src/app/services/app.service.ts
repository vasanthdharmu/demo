import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private userLoggedIn = new Subject<any>();
  constructor() {}

  setLoggedIn(userName: string) {
    this.userLoggedIn.next({ user: userName });
  }

  getLoggedIn(): Observable<any> {
    return this.userLoggedIn.asObservable();
  }
}
