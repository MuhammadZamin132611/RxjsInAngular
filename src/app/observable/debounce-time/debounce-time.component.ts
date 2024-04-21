import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { fromEvent, map } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements AfterViewInit {

  constructor(private loadingBar: LoadingBarService){}

reqData:any = null;
reqData2:any = null;
  @ViewChild('myInput') myInput!:ElementRef;
  @ViewChild('myInput2') myInput2!:ElementRef;
  ngAfterViewInit(): void {
    
    // Ex - 01 debounceTime
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup')
    searchTerm.pipe(
      map(event => event.target.value),
      debounceTime(500)
    )
    .subscribe(res=>{
      console.log(res)
      this.reqData = res
      this.loadingBar.start()
      setTimeout(() => {
        this.reqData = null
        this.loadingBar.stop()
      }, 3000);
    })
    

    // Ex - 02 
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup')
    searchTerm2.pipe(
      map(event => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe(res=>{
      console.log(res)
      this.reqData2 = res
      this.loadingBar.start()
      setTimeout(() => {
        this.reqData2 = null
        this.loadingBar.stop()
      }, 3000);
    })
  }
}
