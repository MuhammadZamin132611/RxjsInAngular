import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-tap-operator',
  templateUrl: './tap-operator.component.html',
  styleUrls: ['./tap-operator.component.scss']
})
export class TapOperatorComponent implements OnInit {

  constructor(private designUtility:DesignUtilityService){}

  ngOnInit(): void {
    
    const source = interval(1000);
    // Ex - 01
    const Arr = [ 'Anup', 'Shekhar', 'Sharma', 'Uxtrendz', 'Jhon', 'Alex', 'Robert' ];

    let obsSubscription: Subscription;

    obsSubscription = source.pipe(
      tap(res => {
        // console.log('tap before =>',res)
        if(res === 7 ){
          obsSubscription.unsubscribe()
        }
      })
      ,map(res => Arr[res],
        // tap(res => console.log('tap after =>',res))
      )
    )
    .subscribe(res=>{
      // console.log(res)
      this.designUtility.print(res,'elContainer')
    })


    // Ex - 02
    const colors = ['Red', 'Green','Violet', 'Blue', 'Orange', 'Yellow', 'Purple' ];

    let obsSubscription2: Subscription;
    obsSubscription2 = source.pipe(
      tap(res => {
        this.myColor = colors[res]
        console.log('tap =>',res)
        if(res === 7 ){
          obsSubscription2.unsubscribe()
        }
      }),
      map(res => colors[res]
      )
    )
    .subscribe(res=>{
      // console.log(res)
      this.designUtility.print(res,'elContainer2')
    })
  }
  myColor:string = '';
}
