import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent {

  constructor() { }

  carPurchased() {
    return true;
  }

  BikePurchased() {
    return false;
  }

  msg:string = '';
  ngOnInit() {

    let mypromise = new Promise((resolve, reject) => {
      if (this.carPurchased()) {
        setTimeout(() => {
          resolve('Car Purchased');
        }, 3000);
      }
      else if (this.BikePurchased()) {
        setTimeout(() => {
          resolve('Bike Purchased');
        }, 3000);
      } else {
        setTimeout(() => {
          reject('Rejected');
        }, 3000);
      }
    });

    mypromise.then((res:any) => {
      this.msg = res;
      console.log('then code=>', res);
    }).catch((res) => {
      this.msg = res;
      console.log('Catch code=>', res)
    })
  }
}