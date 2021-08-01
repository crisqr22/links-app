import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div>
      <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="animate__animated animate__fadeIn mask-loader-box"></div>
    </div>
  `,
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {}
