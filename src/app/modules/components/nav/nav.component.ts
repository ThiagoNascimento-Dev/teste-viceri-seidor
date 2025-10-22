import { UtilsService } from './../../../shared/services/utils.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    ToolbarModule,
    ButtonModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {

  constructor(
    private utilService:UtilsService,
    private router:Router,
  ) {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])

  onResize() {
    this.checkScreenSize();
  }

  isMobile: boolean = false;

  showItemNav:boolean = false;
  showNavBar:boolean = false;

  _utilService = this.utilService;
  openNav: boolean = false;

  ngOnInit() {

    this.isMobile ? this.openNav = false : this.openNav = true;

    this.checkUrll();

    this.checkNavBar();

  }

  navMobile() {
    if (this.isMobile) {
      this.openNav =! this.openNav;
    }
  }

  checkUrll () {
    const urlList = ['/', '/home', '/login', '/esqueci-a-senha'];
    this.router.events.subscribe(()=> {
      const rota = this.router.url;
      if (urlList.includes(rota)) {
        this.showItemNav = true;
      } else {
        this.showItemNav = false;
      }
    })
  }

  checkNavBar() {
    const urlList = ['/login', '/esqueci-a-senha'];
    this.router.events.subscribe(()=> {
      const rota = this.router.url;
      if (urlList.includes(rota)) {
        this.showNavBar = false;
      } else {
        this.showNavBar = true;
      }
    })
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.openNav = true;
    } else {
      this.openNav = false;
    }
  }

}
