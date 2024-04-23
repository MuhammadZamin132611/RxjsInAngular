import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, map, take, zip } from 'rxjs';

@Component({
  selector: 'app-zip-forkjoin',
  templateUrl: './zip-forkjoin.component.html',
  styleUrls: ['./zip-forkjoin.component.scss']
})
export class ZipForkjoinComponent implements AfterViewInit {

  // Sources
  nameSource = ['Anup', 'Shakhar', 'Sharma', 'Uxtrendz', 'Jhon', 'Alex', 'Robort', 'Sam']
  colorSource = ['red','green', 'blue', 'yellow', 'violet', 'purple', 'grey']

  
  // Template Refrence
  @ViewChild('name') name!:ElementRef
  @ViewChild('color') color!:ElementRef

  ngAfterViewInit(): void {
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(map(e=>e.target.value),take(4))
    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(map(e=>e.target.value),take(3))

    // Ex - 01 Zip
    zip(nameObs, colorObs).subscribe(([name, color])=>{
      console.log(name,color)
      this.createBox(name, color, 'elcontainer')
    })

    // Ex - 01 ForJOin
    forkJoin(nameObs, colorObs).subscribe(([name, color])=>{
      console.log(name,color)
      this.createBox(name, color, 'elcontainer2')
    })
  }

  createBox(name:any, color:any, containerId:any){
    let el = document.createElement('div')
    el.innerText = name;
    el.setAttribute('class',color);
    document.getElementById(containerId)?.appendChild(el);
  }
}
