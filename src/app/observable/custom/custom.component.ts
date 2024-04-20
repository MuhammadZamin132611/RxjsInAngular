import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  constructor(private utilityDegign: DesignUtilityService) { }

  techStatus: any;

  ngOnInit(): void {
    // Ex - 01 (Manual)

    // const cusObs1 = Observable.create(observer => {
    //   setTimeout(() => {
    //     observer.next('Html, CSS')
    //   }, 1000);
    //   setTimeout(() => {
    //     observer.next('JavaScript')
    //     //  observer.complete()
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('TypeScript')
    //     observer.error(new Error('Limit Exced'))

    //   }, 3000);
    //   setTimeout(() => {
    //     observer.next('TypeScript')
    //     // observer.error(new Error('Limit Exced'))
    //     observer.complete()

    //   }, 3000);
    //   // observer.error()
    //   // observer.complete()
    // })

    // cusObs1.subscribe(res => {
    //   console.log(res)
    //   this.utilityDegign.print(res, 'elContainer')
    // },
    //   (err) => {
    //     this.techStatus = 'error'
    //   },
    //   () => {
    //     this.techStatus = 'complete'
    //   }
    // )

    // Ex - 02

    // const cusObs2 = Observable
  }
}
