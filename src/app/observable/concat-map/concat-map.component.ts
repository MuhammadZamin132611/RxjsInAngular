import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

  constructor(private du:DesignUtilityService){}
  getData(data:any){
    return of(data + ' Video Uploaded').pipe(delay(200))
  }

  ngOnInit(): void {
    
    const source  = from(['Tech', 'Compedy', 'News'])

    // Ex - 01 | Map
    source.pipe(
      map(res => this.getData(res))
    ).subscribe(res=> res.subscribe(res2=>{
      // console.log(res2)
      this.du.print(res2,'elContainer')
    }))

    // Ex - 02 | Map + concatAll
    source.pipe(
      map(res => this.getData(res)),concatAll()
    ).subscribe(res=> {
      // console.log(res)
      this.du.print(res,'elContainer2')
    })


    // Ex - 02 | Map + concatAll = concatMap
    source.pipe(
      concatMap(res => this.getData(res))
    ).subscribe(res=> {
      // console.log(res)
      this.du.print(res,'elContainer3')
    })
  }
}
