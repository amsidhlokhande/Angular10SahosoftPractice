import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MyActivateChildGuardGuard implements CanActivateChild {
  constructor(private userService: UserService, private router: Router) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.userService.isChildRight()) {
      return true;
    } else {
      alert('You don\'t have permission to access this page. Redirecting to home page.');
      this.router.navigate(['home']);
      return false;
    }
  }


}
