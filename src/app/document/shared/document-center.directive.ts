import { Directive, ElementRef, AfterViewInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { EMPTY as empty, Observable } from "rxjs";

import { PipeService } from "./pipe.servive";

let HOST_PATH = window.location.origin;
const URL_DATAS = {
  云服务器: "/document/ecs/index.html",
  云物理主机: "/document/cps/index.html",
  虚拟私有网络: "/document/vpc/index.html",
  弹性公网IP: "/document/eip/index.html",
  负载均衡: "/document/slb/index.html",
  云硬盘: "/document/ebs/index.html",
  对象存储: "/document/oss/index.html",
  "云数据库 MySQL": "/document/rds/index.html",
  "云数据库 Redis": "/document/redis/index.html",
  "云数据库 MongoDB": "/document/mongodb/index.html",
  "云数据库 TSDB": "/document/tsdb/index.html",
  "大数据 HDInsight": "/document/hdinsight/index.html",
  容器服务: "/document/cks/index.html",
  微服务: "/document/micro-service-doc/index.html",
  代码托管: "/document/cicd/3-operations-guide/3.1-build.html#代码托管",
  构建: "/document/cicd/3-operations-guide/3.1-build.html#源代码构建镜像",
  流水线: "/document/cicd/3-operations-guide/3.2-pipeline.html#创建流水线",
  代码检查: "/document/cicd/3-operations-guide/3.4-codecheck.html#创建检查",
  程序包: "/document/cicd/3-operations-guide/3.3-package.html#程序包上传",
  物联网服务: "/document/iot/index.html",
  镜像: "/document/ecs/4-operations-guide/4.2-image.html#镜像",
  "云审计 CAS": "/document/cas/4-operations-guide.html",
  "Putty 密码方式":
    "/document/ecs/4-operations-guide/4.1-instance.html#登录linux实例",
  Putty密码方式:
    "/document/ecs/4-operations-guide/4.1-instance.html#登录linux实例",
  API秘钥: "/document/key/4-operations-guide.html",
  扩容云硬盘: "/document/ebs/4-operations-guide.html#扩容云硬盘",
  证书管理: "/document/slb/index.html",
  子网使用指南: "/document/vpc/4-operations-guide.html#创建子网",
  路由表使用指南: "/document/vpc/4-operations-guide.html#添加路由策略",
  网络与安全使用指南: "/document/vpc/4-operations-guide.html#创建安全组",
  共享带宽使用指南: "/document/vpc/4-operations-guide.html#创建共享带宽",
  云服务器产品介绍: "/document/ecs/1-service-introduction.html",
  云服务器快速入门: "/document/ecs/3-quickstart.html",
  云服务器操作指南: "/document/ecs/4-operations-guide/4.1-instance.html",
  云物理主机产品介绍: "/document/cps/1-service-introduction.html",
  云物理主机快速入门: "/document/cps/3-quickstart.html",
  云物理主机操作指南: "/document/cps/4-operations-guide.html",
  容器服务产品介绍: "/document/cks/1-service-introduction.html",
  容器服务快速入门: "/document/cks/2-quickstart.html",
  容器服务操作指南: "/document/cks/3-operations-guide/3.1-application.html",
  云硬盘产品介绍: "/document/ebs/1-service-introduction.html",
  云硬盘快速入门: "/document/ebs/3-quickstart.html",
  云硬盘操作指南: "/document/ebs/4-operations-guide.html",
  对象存储产品介绍: "/document/oss/1-service-introduction.html",
  对象存储快速入门: "/document/oss/3-quickstart.html",
  对象存储操作指南: "/document/oss/4-operations-guide.html",
  虚拟私有网络产品介绍: "/document/vpc/1-service-introduction.html",
  虚拟私有网络操作指南: "/document/vpc/4-operations-guide.html",
  弹性公网IP产品介绍: "/document/eip/1-service-introduction.html",
  弹性公网IP操作指南: "/document/eip/4-operations-guide.html",
  负载均衡产品介绍: "/document/slb/1-service-introduction.html",
  负载均衡操作指南: "/document/slb/4-operations-guide.html",
  "云数据库 MySQL产品介绍": "/document/rds/1-service-introduction.html",
  "云数据库 MySQL快速入门": "/document/rds/3-quickstart.html",
  "云数据库 MySQL操作指南":
    "/document/rds/4-operations-guide/4.1-instance.html",
  托管Hadoop产品介绍: "/document/hdinsight/1-service-introduction.html",
  托管Hadoop快速入门: "/document/hdinsight/2-quickstart.html",
  托管Hadoop操作指南: "/document/hdinsight/3-operations-guide.html",
  软件开发服务产品介绍: "/document/cicd/1-service-introduction.html",
  软件开发服务快速入门: "/document/cicd/2-quickstart.html",
  软件开发服务操作指南: "/document/cicd/3-operations-guide/3.1-build.html",
  物联网服务产品介绍: "/document/iot/1-service-introduction.html",
  物联网服务快速入门: "/document/iot/2-quickstart.html",
  物联网服务操作指南: "/document/iot/3-operations-guide/3.1-iot-hub.html",
  "DDoS 高防产品介绍": "/document/ddos/1-service-introduction.html",
  "DDoS 高防快速入门": "/document/ddos/3-quickstart.html",
  "DDoS 高防操作指南": "/document/ddos/4-operations-guide.html",
  CDN产品介绍: "/document/cdn/1-service-introduction.html",
  CDN产品定价: "/document/cdn/2-product-pricing.html",
  CDN快速入门: "/document/cdn/3-quickstart.html"
};

@Directive({
  selector: "[nzi-document-center]"
})
export class NziDocumentCenterDirective implements AfterViewInit {
  @Input() docTitle;

  constructor(
    private el: ElementRef,
    private pipeService: PipeService,
    private http: HttpClient
  ) {}

  setHref(datas, innerDatas?) {
    datas = datas || URL_DATAS;
    if (datas.hostPath) {
      HOST_PATH = datas.hostPath;
    }
    let nativeText = this.el.nativeElement.innerText;
    nativeText = nativeText.trim();
    let text = this.docTitle || nativeText.slice(0, -4);
    let flag = true;
    for (let key in datas) {
      if (this.docTitle == key || key == text || nativeText == key) {
        let url = datas[key];
        if (url.startsWith("/")) {
          url = url;
        } else {
          url = "/" + url;
        }
        this.el.nativeElement.href = HOST_PATH + url;
        this.el.nativeElement.target = "_blank";
        flag = false;
        return;
      }
    }
    if (flag && innerDatas) {
      for (let key in innerDatas) {
        if (this.docTitle == key || key == text || nativeText == key) {
          let url = innerDatas[key];
          if (url.startsWith("/")) {
            url = url;
          } else {
            url = "/" + url;
          }
          this.el.nativeElement.href = HOST_PATH + url;
          this.el.nativeElement.target = "_blank";
          return;
        }
      }
    }
  }

  private handleError() {
    return (error: any): Observable<any> => {
      this.setHref(URL_DATAS);
      return empty;
    };
  }

  ngAfterViewInit() {
    if (this.pipeService.noGetDocumentUrl) {
      let time = setInterval(() => {
        if (this.pipeService.documentData) {
          this.setHref(this.pipeService.documentData, URL_DATAS);
          clearInterval(time);
        }
      }, 1);
    } else {
      this.http
        .get("assets/document-url.json")
        .pipe(
          tap(response => {
            this.pipeService.documentData = response;
            this.setHref(response, URL_DATAS);
          }),
          catchError(this.handleError())
        )
        .subscribe();
      this.pipeService.noGetDocumentUrl = true;
    }
  }
}
