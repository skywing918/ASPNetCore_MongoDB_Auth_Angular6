import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  openOrClose(event) {
    var target = $(event.currentTarget);
    target.toggleClass('open');
    return false;
  }

  openOrCloseForToggle(event) {
    var target = $('.left-sidebar-spacer');
    target.toggleClass('open');
    return false;
  }
}
