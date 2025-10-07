import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users?: User[] = []
  loggedInuser: User={};
  constructor() { }
  login(user: User) : boolean{
    const activeUsers = this.users?.find(usr => usr.email === user.email && usr.password === user.password);
    if(activeUsers){
      this.loggedInuser = activeUsers;
      return true;
    }
    return false;
  }

  getLoggedInuser() {
    return this.loggedInuser;
  }
  logout() {
    this.loggedInuser = {};
    console.log("User logged out!", this.loggedInuser);
  }
  singUp(user: User):string {
    const activeUsers = this.users?.find(usr => usr.email === user.email);
    if(activeUsers) {
      return 'Email Id already taken!'
    }
    this.users?.push({...user, id: this.users.length})
    return ''
  }

  isAuthenticated(): boolean {
    return this.loggedInuser.email?true:false;
  }
}


export interface User {
  email?: string,
  password?: string,
  fname?: string,
  lname?: string,
  id?: number,
}
