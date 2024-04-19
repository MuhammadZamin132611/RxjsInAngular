import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addBtn') addBtn!: ElementRef;
  constructor(private designServices:DesignUtilityService) {
    this.addBtn = {} as ElementRef;
  }

  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((resp) => {
      let countVal = 'Video ' + count++
      console.log(countVal);
      this.designServices.print(countVal, 'elContainer')
      this.designServices.print(countVal, 'elContainer2')
    });
  }


  ngOnInit(): void {
 
  }

}
