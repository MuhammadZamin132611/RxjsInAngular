import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {
  userName: string = '';

  constructor(private desingUtility: DesignUtilityService) {
    this.desingUtility.userName.subscribe(res => {
      this.userName = res
    })
  }

  ngOnInit(): void {
    this.desingUtility.exclusive.next(true);
  }

  ngOnDestroy(): void {
    this.desingUtility.exclusive.next(false);
  }
}