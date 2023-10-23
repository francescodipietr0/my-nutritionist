import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'mynt-sidebar',
    template: `
      <div class="flex-center">
        <div class="menu">

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
      }

      .menu {
        width: 65%;
        height: 92vh;
        background: white;
      }

      .backdrop {
        width: 35%;
        height: 92vh;
        background: $secondary-color;
      }

    `],
  })
  export class MyntSidebarComponent implements OnDestroy {
    
    constructor() {
      document.body.classList.add("is-menu-open");
    }

    ngOnDestroy(): void {
      document.body.classList.remove("is-menu-open");
    }
    

  }
  