import {Component, OnInit} from '@angular/core';
import {NavBarElement} from '../../interface-types/nav-bar';
import {NAV_BAR_LIST} from '../../content/NavBar/NavBar.content';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  navBarElements: NavBarElement[] = NAV_BAR_LIST;

  constructor() {
  }

  ngOnInit() {
  }

}
