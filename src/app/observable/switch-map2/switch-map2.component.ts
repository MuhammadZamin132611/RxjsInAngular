import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs';
import { Search } from 'src/app/appInterFace/search.interface';
import { SearchServiceService } from 'src/app/appServices/search-service.service';

@Component({
  selector: 'app-switch-map2',
  templateUrl: './switch-map2.component.html',
  styleUrls: ['./switch-map2.component.scss']
})
export class SwitchMap2Component implements AfterViewInit {

  constructor(private search:SearchServiceService){}
  @ViewChild('seachForm') seachForm!: NgForm
  ngAfterViewInit(): void {

    // this.search.getSearches('aut').subscribe(res=>{
    //   console.log(res)
    // })


   const formValue = this.seachForm.valueChanges;
   
   formValue?.pipe(
    // filter(()=> this.seachForm.valid),
    map(data => data['searchTerm']),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(res => this.search.getSearches(res))
   ).subscribe(res=>{
    console.log(res)
    this.searchResult
    // console.log('count =>'+ Object.keys(res).length)
    this.searchResultCount = Object.keys(res).length
   })
  }
  searchResultCount:any;
  searchResult:any
}
