import { Component } from '@angular/core';

@Component({
  selector: 'app-promoise',
  templateUrl: './promoise.component.html',
  styleUrls: ['./promoise.component.scss']
})
export class PromoiseComponent {

  // constructor() {
  //   let buyLaptopn = new Promise((resolve, rejects) => {
  //     // resolve ('Promis is resolve')
  //     // rejects('Promis is rejects')
  //     if (this.DellAvailable()) {
  //       return setTimeout(() => {
  //         // resolve ('Dell is Purchased')
  //         resolve(this.dell)
  //       }, 3000)
  //     } else if (this.HpAvailable()) {
  //       return setTimeout(() => {
  //         // resolve ('Hp is Purchased')
  //         resolve(this.hp)
  //       }, 3000)
  //     }
  //     else {
  //       return setTimeout(() => {
  //         // rejects ('Laptop is not available on store')
  //         rejects(this.notAvil)
  //       }, 3000)
  //     }
  //   });

  //   buyLaptopn.then(res => {
  //     console.log('then code => ', res)
  //     this.promiseVal = res
  //   }).catch(res => {
  //     console.log('catch code => ', res)
  //     this.promiseVal = res
  //   })

  //   // console.log(this.getData())
  //   this.getData().then(data=> console.log(data))


  // }

  // let promise = new Promise((resolve), reject)=>{

  // })

  // async getData() {
  //   return 'Data Recived'
  // }
  // promiseVal: any;

  // dell = {
  //   brand: 'Dell',
  //   HardDisk: '2 TB',
  //   color: 'Black'
  // }

  // hp = {
  //   brand: 'hp',
  //   HardDisk: '1 TB',
  //   color: 'Silver'
  // }

  // notAvil = {
  //   brand: 'Not Available',
  //   ststus: 'Faild'
  // }

  // DellAvailable() {
  //   return false
  // }

  // HpAvailable() {
  //   return false
  // }

  ngOnIt(): void { }


  // definate
  // myFunction(){
  //   console.log('myFunction Called')
  // }




  constructor() {

  }

  

}
