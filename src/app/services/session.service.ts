import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const USER_KEY = 'user'

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user = {
    username: ''
  };

  //subject will watch boolean for changes
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    const userString = window.localStorage.getItem(USER_KEY);
    try {
      if (userString) {
        this.user = JSON.parse(userString);
        
        //update isLoggedInSubject with new value on construction
        this.isLoggedInSubject.next(!!userString)
      
      }
      else { console.log('user was not found'); }
    }
    catch (err) {
      console.log('could not parse user');
    }
  }

  getSession() {
    return this.user;
  }

  setSession(username) {
    //save to memory
    this.user.username = username;
 

    //save to local storage
    const userString = JSON.stringify(this.user);
    window.localStorage.setItem(USER_KEY, userString);

    //update subject
    this.isLoggedInSubject.next(true)
  }

  clearSession() {
    this.user.username = '';
    window.localStorage.removeItem(USER_KEY);
    this.isLoggedInSubject.next(false)
  }

  isLoggedInAsAObservable() {
    return this.isLoggedInSubject.asObservable();
  }
}