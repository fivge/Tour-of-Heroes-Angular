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
  },
  {
    path: "list",
    loadChildren: () =>
      import("./data-list/data-list.module").then(mod => mod.DataListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
