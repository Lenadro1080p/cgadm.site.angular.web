import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-end-page',
  templateUrl: './end-page.component.html',
  styleUrls: ['./end-page.component.scss']
})
export class EndPageComponent {
  ngOnInit() {
    AOS.init();
    window.addEventListener('load',AOS.refresh)
  }
}
