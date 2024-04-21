import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component {
  
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
