import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isAdminRight(): boolean {
    return true;
  }
  isChildRight(): boolean {
    return false;
  }
}
