import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
obsMsg:any;
  constructor(private designService: DesignUtilityService){}

  ngOnInit(): void {
    // OF

    const obs1 = of('Anup', 'Shekar', 'Sharma');
    obs1.subscribe(res=>{
      // console.log(res)
      this.designService.print(res, 'elContainer');
    })

    const obs2 = of({a: 'Anup', b: 'Shekar', c: 'Sharma'});
    obs2.subscribe(res=>{
      this.obsMsg = res;
      // console.log('obsMsg => ',res)
    })


    // From
    const obs3 = from(['Uxtrendz', 'Jhon', 'Alex']);
    obs3.subscribe(res=>{
      // console.log(res)
      this.designService.print(res, 'elContainer3');
    })


    // From Promise
    const promise = new Promise(resolve =>{
      setTimeout(() => {
        resolve('Promise Resolved')
      }, 3000);
    })

    const obs4 = from(promise);
    obs4.subscribe(res=>{
      // console.log('from Promise',res)
      this.designService.print(res, 'elContainer4');
    })
    // promise.then(res=>{
    //   console.log(res)
    // })

    // From String
    const obs5 = from('Wlecome to Uxtrendsz');
    obs5.subscribe(res=>{
      console.log('from String => ',res)
      this.designService.print(res, 'elContainer5');
    })
  }
}
