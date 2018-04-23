import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { EditComponent } from "./edit/edit.component";

export class CanActivateEdit implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return true;
    }
}

export class CanDeactivateEdit implements CanDeactivate<EditComponent> {
    canDeactivate(component: EditComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (component.id%2 == 0) {
            return confirm("Leave?");
        }
        else return true;
    }
}