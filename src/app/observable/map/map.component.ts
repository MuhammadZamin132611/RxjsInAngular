import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map, toArray } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private designutility:DesignUtilityService){}


  // subscription
  sub1!: Subscription
  sub2!: Subscription

  // messagse
  msg1:any
  msg2:any
  ngOnInit(): void {
    
    const broadCastVideo = interval(1000)
    
    // Ex - 01
    this.sub1 = broadCastVideo.pipe(
      map(data => 'Video ' + data)
    ).subscribe(res=>{
      // console.log(res)
      this.msg1 = res;
    })

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);


    // Ex - 02
    this.sub2 = broadCastVideo.pipe(map(data =>data * 2))
    .subscribe(res=>{
      // console.log(res)
      this.msg2 = res
    })
    setTimeout(() => {
      this.sub2.unsubscribe()
    }, 10000);

    // Ex - 03

    const members = from([
      {id:1, name:'Anup'},
      {id:2, name:'Shekhar'},
      {id:3, name:'Sharma'},
      {id:4, name:'Uxtrendz'},
      {id:5, name:'Jhon'},
      {id:6, name:'Alex'},
      {id:7, name:'Pankaj'},
      {id:8, name:'Vivek'},
    ])

    members.pipe(map(data=>data.name)).subscribe(res=>{
      console.log(res)
      this.designutility.print(res,'elContainer')
    })
  }

}
