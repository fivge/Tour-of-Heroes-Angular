import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DockerComponent } from "./docker/docker.component";
import { Routes, RouterModule } from "@angular/router";
import { NziDocumentCenterDirective } from "./shared/document-center.directive";
import { PipeService } from "./shared/pipe.servive";

const routes: Routes = [
  {
    path: "",
    component: DockerComponent
  }
];

@NgModule({
  declarations: [NziDocumentCenterDirective, DockerComponent],
  providers: [PipeService],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class DocumentModule {}
