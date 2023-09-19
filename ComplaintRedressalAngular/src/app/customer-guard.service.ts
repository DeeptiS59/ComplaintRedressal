import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const CustomerGuardService:CanActivateFn=(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  let userRole:String=localStorage.getItem("userRole")||"";
  if(userRole=="customer" || userRole=="admin") {
    return true;
  }
  return inject(Router).createUrlTree(["/login"])};