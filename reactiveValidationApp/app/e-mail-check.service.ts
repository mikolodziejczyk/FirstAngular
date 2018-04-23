import { Injectable } from '@angular/core';

@Injectable()
export class EMailCheckService {

  constructor() { }

  isAllowed = (mail : string) : Promise<boolean> => {
    let p = new Promise<boolean>(
      (resolve, reject) => {
        window.setTimeout( () => {
          let ok = (mail !== "not@allowed");
          resolve(ok);
        }, 1000);
      }
    );

    return p;
  }
}
