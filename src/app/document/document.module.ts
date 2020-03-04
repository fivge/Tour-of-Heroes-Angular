import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DockerComponent } from "./docker/docker.component";
import { Routes, RouterModule } from "@angular/router";
import { NziDocumentCenterDirective } from "./shared/document-center.directive";
import { PipeService } from "./shared/pipe.servive";
import { HighlightComponent } from "./highlight/highlight.component";
import { HighlightDirective } from "./shared/highlight.directive";
import { HeroListComponent } from "./hero-list/hero-list.component";
import { UnlessDirective } from "./shared/unless.directive";
import { AclAllowDirective } from "./shared/acl-allow.directive";
import { UserListComponent } from "./user-list/user-list.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "user",
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
    path: "hero",
    component: HeroListComponent
  },
  {
    path: "user",
    component: UserListComponent
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
    HighlightDirective,
    HeroListComponent,
    UnlessDirective,
    AclAllowDirective,
    UserListComponent
  ],
  providers: [PipeService],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class DocumentModule {}
