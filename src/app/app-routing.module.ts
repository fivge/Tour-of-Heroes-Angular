import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "doc",
    pathMatch: "full"
  },
  {
    path: "doc",
    loadChildren: () =>
      import("./document/document.module").then(mod => mod.DocumentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
