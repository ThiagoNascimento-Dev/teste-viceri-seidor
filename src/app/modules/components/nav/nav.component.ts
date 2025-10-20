import { UtilsService } from './../../../shared/services/utils.service';
import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {

  constructor(
    private utilService:UtilsService,
  ) {}

  _utilService = this.utilService;
  openNav: boolean = false;

  get isMobile(): boolean {
    console.log(window.matchMedia('(max-width: 768px)').matches);
    return window.matchMedia('(max-width: 768px)').matches;
  }

  ngOnInit() {
    this.isMobile ? this.openNav = false : this.openNav = true;
  }

  navMobile() {
    this.openNav =! this.openNav;
  }



}
