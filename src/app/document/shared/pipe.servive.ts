import { Injectable } from '@angular/core';

@Injectable()
export class PipeService {
  statusData: any = {};
  noGetStatusUrl: any = {};

  dictData: any = {};
  noGetDictUrl: any = {};

  documentData: any;
  noGetDocumentUrl: boolean = false;

  mode;
  noGetMode: boolean = false;
}
