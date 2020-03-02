import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DockerComponent } from "./docker/docker.component";
import { Routes, RouterModule } from "@angular/router";
import { NziDocumentCenterDirective } from "./shared/document-center.directive";
import { PipeService } from "./shared/pipe.servive";
import { HighlightComponent } from "./highlight/highlight.component";
import { HighlightDirective } from "./shared/highlight.directive";

const routes: Routes = [
  {
    path: "",
    redirectTo: "highlight",
    pathMatch: "full"
  },
  {
    path: "docker",
    component: DockerComponent
  },
  {
    path: "highlight",
    component: HighlightComponent
  },
  {
    path: "**",
    redirectTo: "highlight"
  }
];

@NgModule({
  declarations: [
    NziDocumentCenterDirective,
    DockerComponent,
    HighlightComponent,
    HighlightDirective
  ],
  providers: [PipeService],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class DocumentModule {}
