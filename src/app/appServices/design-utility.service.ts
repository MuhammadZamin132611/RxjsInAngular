import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  exclusive = new Subject<boolean>();

  userName = new BehaviorSubject<string>('Zamin');

  videoEmmit = new ReplaySubject<string>(3, 5000)

  asyncVideoEmmit = new AsyncSubject()
  
  print(val:any, containerId:any){
    let el = document.createElement('li');
    el.innerText = val
    document.getElementById(containerId)?.appendChild(el)
  }

  print2(val:any, containerId:any){
    let el = document.createElement('div');
    el.setAttribute('class', 'item')
    el.innerHTML = val
    document.getElementById(containerId)?.prepend(el)
  }
}
