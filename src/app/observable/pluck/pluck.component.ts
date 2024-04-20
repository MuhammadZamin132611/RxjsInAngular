import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  constructor(){}

  users=[
    {
      name: 'Zamin', 
      skill:'Angular',
      jobs: {
        title: 'Fronted Developer',
        exp: '10 Years'
      }
    },
    {
      name: 'Mohd',
     skill:'Java',
     jobs: {
       title: 'Java Developer',
       exp: '1 Years'
     }
    },
    {
      name: 'Kafi',
      skill:'React',
      jobs: {
        title: 'React Developer',
        exp: '5 Years'
      }
    },
    { 
      name: 'Shabeeb',
      skill:'JavaScript',
      jobs: {
        title: 'JavaScript Developer',
        exp: '3 Years'
      }
    },
  ]
  data:any
  data2:any
  ngOnInit(): void {

    // Ex - 01
    from(this.users).pipe(
      // map(data => data.name),
      pluck('name'),
      toArray())
    .subscribe(res=>{
      // console.log(res)
      this.data = res
    })


    // Ex - 02
    from(this.users).pipe(
      // map(data => data.name),
      pluck('jobs','title'),
      toArray())
    .subscribe(res=>{
      console.log(res)
      this.data2 = res
    })
  }
}
