import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.sass']
})
export class PagesComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  loginUserName = 'ログインユーザ';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router) {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd && this.sidenav.mode === 'over') {
        this.sidenav.toggle();
      }
    });
  }

  ngOnInit() {
  }

  onDeactivate(): void {
    window.scrollTo(0, 0);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
