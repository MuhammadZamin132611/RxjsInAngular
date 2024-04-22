import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, map, mergeMap, of, switchAll, switchMap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor(private du: DesignUtilityService) { }

  getData(data: any) {
    return of(data + ' Video Uploaded').pipe(delay(300))
  }
  ngOnInit(): void {
    const source = from(['Tech', 'Compedy', 'News']);

    // Ex - 01 | Map
    source.pipe(
      map(data=>this.getData(data))
    ).subscribe(res=>res.subscribe(res2=>{
      // console.log(res2);
      this.du.print(res2,'elContainer')
    }))

    // Ex - 02 | Map + SwitchAll
    source.pipe(
      map(data=>this.getData(data)),
      switchAll()
    ).subscribe(res=>{
      // console.log(res);
      this.du.print(res,'elContainer2')
    })


    // Ex - 03 | SwitchMap
    source.pipe(
      switchMap(data=>this.getData(data))
    ).subscribe(res=>{
      // console.log(res);
      this.du.print(res,'elContainer3')
    })


     // Ex - 04 | MergeMap
     source.pipe(
      mergeMap(data=>this.getData(data))
    ).subscribe(res=>{
      console.log(res);
      this.du.print(res,'elContainer4')
    })
    
    // Ex - 05 | ConcatMap
    source.pipe(
      concatMap(data=>this.getData(data))
    ).subscribe(res=>{
      // console.log(res);
      this.du.print(res,'elContainer5')
    })
  }
}
