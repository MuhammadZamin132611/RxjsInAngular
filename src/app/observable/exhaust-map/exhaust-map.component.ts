import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concatMap, exhaustMap, fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit, AfterViewInit {

  url = `http://localhost:3000/exhaust`

  constructor(private http:HttpClient){}

  @ViewChild('btn') btn!:ElementRef
  ngOnInit(): void {
    
  }

  num:number = 0
  saveRequest:any;

  // buttonClick(){
  //   this.onSave(this.num++).subscribe(res=>{
  //     console.log(res);
  //   })
  // }

  fetching: boolean = false;

  onSave(changes:any){
    return this.http.put(this.url,{id:changes})
  }
  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement, 'click').pipe(
      tap(()=>this.fetching = true),
      exhaustMap(()=>this.onSave(this.num++))
    ).subscribe(res=>{
      console.log(res);
      this.onFetch();
      this.fetching = false;
    })
  }
  onFetch(){
    this.http.get<any>(this.url).subscribe(res=>{
      console.log(res.id)
      this.saveRequest = res.id;
    })
  }
}
