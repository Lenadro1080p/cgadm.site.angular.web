import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  ngOnInit() {
    AOS.init();
    window.addEventListener('load',AOS.refresh)
  }
}
