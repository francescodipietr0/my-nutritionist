import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'mynt-sidebar',
    template: `
      <div class="flex-center">
        <div class="menu" [class.active]="active">

        </div>
        <div class="backdrop">

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
      }

      :host.active {
        visibility: visible;
      }

      .menu {
        width: 65%;
        height: 92vh;
        background: white;
        transition: width 0.5s;
      }

      :host.active .menu {

      }

      .backdrop {
        width: 35%;
        height: 92vh;
        background: $secondary-color;
        transition: width 0.5s;
      }

      :host.active .backdrop {

      }

    `],
  })
  export class MyntSidebarComponent implements OnDestroy {
    
    @Input() active = false;

    constructor() {
      document.body.classList.add("is-menu-open");
    }

    ngOnDestroy(): void {
      document.body.classList.remove("is-menu-open");
    }
    

  }
  