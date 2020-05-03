import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

// Creating the array of the pages, define page names and path inside
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss']
})
export class MenuPage implements OnInit {
  activePath = '';

  pages = [
    {
      name: 'Account',
      path: '/menu/dashboard'
    },
    {
      name: 'Contact',
      path: '/menu/contact'
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url;
    });
  }
  ngOnInit() {}
}
