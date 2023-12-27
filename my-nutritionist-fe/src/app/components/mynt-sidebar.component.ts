import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MenuService } from "../services/menu.service";

@Component({
    selector: 'mynt-sidebar',
    template: `
      <div class="backdrop" (click)="onBackdropClick()">
        <div class="menu" (click)="$event.stopPropagation();">
          <div class="inner-menu">

          </div>
        </div>
      </div>
  `,
    styles: [`
      @import "../styles/colors.scss";

      :host {
        position: absolute;
        left: 0;

        width: 100%;
        height: 100%;
        visibility: hidden;

        .menu {
          width: 0%;
          height: 100%;
          background: white;
          transition: width 0.5s;
        }
      }

      :host.active {
        visibility: visible;
        .menu {
          width: 65%;
        }
      }

      .backdrop {
        width: 100%;
        height: 100%;
        background: $secondary-color;
      }

      .inner-menu {
        width: 100%;
        height: 100%;
        background: $bg-color;
      }


    `],
  })
  export class MyntSidebarComponent implements OnChanges {
    
    @Input() active = false;

    constructor(public menuService: MenuService) {}

    ngOnChanges(): void {
      this.active
        ? document.body.classList.add("is-menu-open")
        : document.body.classList.remove("is-menu-open")
    }

    onBackdropClick() {
      // TODO: trovare il modo di animare la chiusura del menu
      this.menuService.changeMenuStatus(false);
    }
    

  }
  