import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { mergeMap, map } from 'rxjs/operators';
import { Collection, User } from '@shared/module_pb';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProtobufDemoService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:3000';
  private wsUrl = 'ws://localhost:8085';
  ws: WebSocket;
  _user: User.AsObject;

  getData() {
    this.user.setId('123');
    console.log('user:', this.user, this.user.serializeBinary(), User.deserializeBinary(this.user.serializeBinary()), this.user.toObject());
    return this.http.post(`${this.url}/user`, this.user.serializeBinary(), {
      responseType: 'arraybuffer'
    });

    // responseType: 'arraybuffer'Uint8Array
  }

  getAllCollections(): Observable<any> {
    return this.http.get('http://localhost:9000/api/v1/collection').pipe(
      mergeMap((data: Array<object>) => from(data)),
      map((data: object) => {
        // Collection.toObject(data);
      })
    );
  }

  collection: Collection = new Collection();

  user: User = new User();

  createObservableSocket(): Observable<any> {
    this.ws = new WebSocket(this.wsUrl);
    return new Observable(observe => {
      this.ws.onmessage = event => observe.next(event.data);
      this.ws.onerror = event => observe.error();
      this.ws.onclose = event => observe.complete();
    }).pipe(
      tap(res => {
        console.log('res', res);
        // let bytes: Uint8Array = new Uint8Array();
        // [...res].forEach((item, i) => {
        //   bytes[i] = item;
        //   // bytes = {...bytes,i: item}
        // });
        // console.log(bytes);

        return User.deserializeBinary(res).toObject();
      })
    );
  }

  sendMessage(message: string) {
    this.ws.send(message);
  }
}
