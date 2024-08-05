import { Component } from "@angular/core";

@Component({
  template: `
    <h2>Home component</h2>
    <p>Click the link below to get an error</p>
    <p>
      <a [routerLink]="['/lazy']">Visit <code>/lazy</code> route</a>
    </p>
  `,
})
export class HomePageComponent {}
