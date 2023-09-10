import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { LandComponent } from "./land/land.component";

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "", component: LandComponent },
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false,
      anchorScrolling: "enabled",
      scrollOffset: [0, 64],
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
