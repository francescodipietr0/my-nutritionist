import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

    private menuStatus = new BehaviorSubject<boolean>(false);
    menu$ = this.menuStatus.asObservable();

    changeMenuStatus(status: boolean) {
        this.menuStatus.next(status);
    }

    constructor() { }

}
