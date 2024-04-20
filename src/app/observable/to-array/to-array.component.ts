import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of, skip, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  constructor(){}

  sourceSub!: Subscription
  ngOnInit(): void {

    // Ex - 01
    const source = interval(1000)
    this.sourceSub = source.pipe(
      take(5), toArray())
    .subscribe(res=>{
      // console.log(res)

      // if(res>=8){
      //   this.sourceSub.unsubscribe()
      // }
    })


    // Ex - 02
    const source2 = from(this.users);

    source2.pipe(toArray()).subscribe(res=>{
      // console.log(res)
    })



    // Ex - 03
    const source3  = of('Anup', 'Shekhar', 'Sharma', 'Uxtrendsz');
    source3.pipe(toArray()).subscribe(res=>{
      console.log(res)
    })

  }

  users = [
    {name: 'Anup', skill: 'Angular'},
    {name: 'Shekhar', skill: 'Html, CSS'},
    {name: 'Sharma', skill:"JavaScript"},
    {name: 'Uxtrentz', skill: 'TypeScript'}
  ]
  
}
