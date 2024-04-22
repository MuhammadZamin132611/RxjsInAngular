import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  constructor(private designUtility: DesignUtilityService) { }

  asyncVideoEmmit:any;
  ngOnInit(): void {
    this.designUtility.asyncVideoEmmit.subscribe(res=>{
      console.log(res);
      this.asyncVideoEmmit = res;
    })
  }

  // Video Add Method
  onVideoAdd(video: any) {
    console.log(video.value)
    this.designUtility.asyncVideoEmmit.next(video.value);
  }

  // onComplete Method
  onComplete(){
    this.designUtility.asyncVideoEmmit.complete();
  }

  
}
