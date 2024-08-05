import { afterNextRender, Component, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SampleService } from "src/app/sample/sample.service";

@Component({
  template: `
    <h1>Lazy page component</h1>
    <a [routerLink]="['/']">Go back</a>
  `,
})
export class LazyPageComponent {
  constructor(private sampleService: SampleService) {
    afterNextRender(() => {
      this.sampleService.foo();
    });
  }
}

@NgModule({
  declarations: [LazyPageComponent],
  imports: [
    // this is needed for the routerlink
    RouterModule,
  ],
  providers: [
    // despite being provided here, it doesn't work
    SampleService,
  ],
})
export class LazyPageModule {}
