import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {
  url = `http://localhost:3000/switchMap`;

  constructor(private http:HttpClient){}

  allProducts!:Observable<any>;
  mobiles!:Observable<any>;
  laptop!:Observable<any>;
  ngOnInit(): void {

    this.allProducts = this.http.get(this.url).pipe(
      shareReplay()
    )

    this.mobiles = this.allProducts.pipe(
      // map(res=>res.filter(mobileData =>{
      //   return mobileData['type']=='mobile'
      // }))
    )
    this.laptop = this.allProducts.pipe(
      // map(res=>res.filter(pclaptop =>{
      //   return pclaptop['type']=='laptop'
      // }))
    )
  }

}
