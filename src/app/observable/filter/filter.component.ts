import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  constructor() { }

  datArr = [
    {"id":1,"name":"Edison","gendar":"Male"},
    {"id":2,"name":"Rowan","gendar":"Female"},
    {"id":3,"name":"Sheldon","gendar":"Male"},
    {"id":4,"name":"Jaylin","gendar":"Male"},
    {"id":5,"name":"Harry","gendar":"Male"},
    {"id":6,"name":"Chase","gendar":"Male"},
    {"id":7,"name":"Timothy","gendar":'Female'},
    {"id":8,"name":"Mayra","gendar":'Female'},
    {"id":9,"name":"Petra","gendar":'Female'},
    {"id":10,"name":"Demarcus","gendar":"Male"}
  ]

  ngOnInit(): void {

    const source = from(this.datArr)

    // Ex - 01 Filter by length
    source.pipe(
      filter(member => member.name.length > 6)
      ,toArray())
    .subscribe(res=>{
      console.log(res)
      this.data = res
    })

    // Ex - 02 filter by gender
    source.pipe(
      filter(member => member.gendar == 'Female')
      ,toArray())
    .subscribe(res=>{
      console.log(res)
      this.data1 = res
    })

    // Ex - 03 filter by nth item
    source.pipe(
      filter(member => member.id <=6)
      ,toArray())
    .subscribe(res=>{
      console.log(res)
      this.data2 = res
    })

  }
  data:any
  data1:any
  data2:any
}
