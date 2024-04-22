import { Component, OnInit } from '@angular/core';
import { from, interval, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

constructor(private du:DesignUtilityService){}
  getData(data:any){
    return of(data + ' Video Uploaded')
  }
  ngOnInit(): void {
    const source = from(['Tech', 'Compedy', 'News']);

    // Ex - 01 | Map

    source.pipe(
      map(res => this.getData(res))
    ).subscribe(res => res.subscribe(res2=>{
      // console.log(res2)
      this.du.print(res2, 'elContainer')
    }))



    
    // Ex - 02 | Map + MergAll

    source.pipe(
      map(res => this.getData(res)),mergeAll()).subscribe(res => {
      // console.log(res)
      this.du.print(res, 'elContainer2')
    })
    
    // Ex - 03 | mergeMap

    source.pipe(
      mergeMap(res => this.getData(res))).subscribe(res => {
      console.log(res)
      this.du.print(res, 'elContainer3')
    })
  }

  
}
