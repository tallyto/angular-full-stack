import { Component } from '@angular/core';
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  public isCollapsed = true;
}
