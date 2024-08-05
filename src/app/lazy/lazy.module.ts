import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LazyPageComponent } from "./lazy-page.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: LazyPageComponent,
      },
    ]),
  ],
})
export class LazyModule {}
