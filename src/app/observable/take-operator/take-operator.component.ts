import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrls: ['./take-operator.component.scss']
})
export class TakeOperatorComponent implements OnInit {

  constructor(private designUtility: DesignUtilityService) {}

  randomNames = ['Anup', 'Shekhar', 'Sharma', 'Uxtrendz', 'Jhon', 'Alex', 'Robert' ]

  ngOnInit(): void {
    
    const nameSource = from(this.randomNames)   

    // Ex - 01 | Take

    nameSource.pipe(
      take(5)
    )
    .subscribe(res=>{
      // console.log(res)
      this.designUtility.print(res,'elContainer')
    })

    // Ex - 02 | TakeLast
    nameSource.pipe(
      takeLast(5)
    )
    .subscribe(res=>{
      // console.log(res)
      this.designUtility.print(res,'elContainer2')
    })

    // Ex - 03 | TakeUntil
    let consdition1 = timer(5000);
    let consdition2 = fromEvent(document, 'click');
    const source = interval(1000);
    source.pipe(
      map(res => 'Number ' + res),
      // takeUntil(consdition1)
      takeUntil(consdition2)
    )
    .subscribe(res=>{
      console.log(res)
      this.designUtility.print(res,'elContainer3')
    })
  }
}
