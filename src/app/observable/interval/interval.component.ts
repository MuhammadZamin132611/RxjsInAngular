import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  constructor(private designService: DesignUtilityService){}


  obsMsg:string="";
  videoSubscription!: Subscription
  ngOnInit():void{
    // const bradCastVideo = interval(1000)
    const bradCastVideo = timer(5000, 1000)
    this.videoSubscription = bradCastVideo.subscribe(res=>{
      console.log(res)
      this.obsMsg = 'Video '+ res
      this.designService.print(this.obsMsg, 'elContainer');
      this.designService.print(this.obsMsg, 'elContainer2');
      this.designService.print(this.obsMsg, 'elContainer3');
      if(res >= 5){
        this.videoSubscription.unsubscribe()
      }
    })
  }
}
