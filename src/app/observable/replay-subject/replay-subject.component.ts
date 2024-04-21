import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  constructor(private designUtility: DesignUtilityService) { }

  // List Data
  user1List = [
    'Angular 1',
    'Angular 2'
  ];
  user2List = ['Angular 1']
  user3List = ['Angular 1']

  // SubscribeModes
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  // Subscription
  subscription2!: Subscription
  subscription3!: Subscription

  // Toggele Properties
  methodInterval:boolean = false;
  intSubscription!: Subscription;

  ngOnInit(): void {
    this.designUtility.videoEmmit.subscribe(res => {
      console.log(res)
      this.user1List.push(res)
    })
  }

  // Video Add Method
  onVideoAdd(video: any) {
    // console.log(video.value)
    this.designUtility.videoEmmit.next(video.value)
  }

  // User - 02 Subscribe Button
  user2Subscribe() {
    if (this.subscribeMode2) {
      this.subscription2.unsubscribe()
    }
    else {
      this.subscription2 = this.designUtility.videoEmmit.subscribe((res: string) => {
        this.user2List.push(res);
      });
    }

    this.subscribeMode2 = !this.subscribeMode2;
  }

  // User - 02 Subscribe Button
  user3Subscribe() {
    if (this.subscribeMode3) {
      this.subscription3.unsubscribe()
    }
    else {
      this.subscription3 = this.designUtility.videoEmmit.subscribe((res: string) => {
        this.user3List.push(res);
      });
    }

    this.subscribeMode3 = !this.subscribeMode3;
  }

  // Toggle Method
  toggleMethod(){
    const broadCastVideo = interval(1000);
    if(!this.methodInterval){
      this.intSubscription = broadCastVideo.subscribe(res=>{
      this.designUtility.videoEmmit.next('Video ' + res)
    })
    }else{
      this.intSubscription.unsubscribe()
    }
    
    this.methodInterval = !this.methodInterval;
  }

}
