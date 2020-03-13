import { Component, OnInit } from '@angular/core';
import { ProtobufDemoService } from '../protobuf-demo.service';
import { User } from '@shared/module_pb';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styles: []
})
export class DataListComponent implements OnInit {
  constructor(private service: ProtobufDemoService) {}

  ngOnInit(): void {}

  getData() {
    this.service.getData().subscribe();
  }

  sendMessageToServer() {
    console.log('ng send success');
    this.service.sendMessage(`send message form angular to express ws server`);
  }

  createObservableSocket() {
    this.service.createObservableSocket().subscribe(
      res => {
        console.log(res, typeof res);

        // // var result = message.toObject() as User.AsObject;

        // // let user: User = new User();
        // // user.toObject(res);

        // let bytes: Uint8Array = new Uint8Array();
        // bytes.toObject();
        // // let bytes: Uint8Array = res;

        // // /**  ArrayBuffer => Blob => string || ArrayBuffer => string => json*/
        // // console.log('length', bytes.byteLength);
        // // Arraybuffer 这种二进制流才有 byteLength 属性
        // // let blob = new Blob([bytes]); // 注意必须包裹[]
        // let blob = res; // 注意必须包裹[]
        // //将Blob 对象转换成字符串
        // let reader = new FileReader();
        // reader.readAsText(blob, 'utf-8');
        // reader.onload = (e: any) => {
        //   let res = JSON.parse(reader.result.toString());
        //   console.log('json', res);
        // };
      },
      error => console.log(error),
      () => console.log('ws has ended!')
    );
  }
}
