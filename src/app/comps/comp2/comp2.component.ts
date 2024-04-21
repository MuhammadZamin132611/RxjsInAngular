import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {

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
