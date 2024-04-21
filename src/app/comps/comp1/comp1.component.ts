import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {

  constructor(private designUtility: DesignUtilityService){
    this.designUtility.userName.subscribe(res => {
      this.userName = res
    })
  }


  uname:any
  userName:string = ''
  onChange(uname:any){
    console.log(uname.value);
    this.designUtility.userName.next(uname.value)
  }
}
