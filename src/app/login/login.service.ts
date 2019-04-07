
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private users: any[] = [
    {
      userName: 'samer',
      Password: '1234'
    },
    {
      userName: 'eli',
      Password: '1234'
    }
  ];
  constructor() { }
  isValid(uname: string, pwd: string) {
 return this.users.find(x => x.userName === uname && x.Password === pwd); 
  }
}
