import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home/home-page.component";

const routes: Routes = [
  {
    path: "lazy",
    loadChildren: () => import("./lazy/lazy.module").then((m) => m.LazyModule),
  },
  {
    path: "",
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
