import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, map, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-combine-last',
  templateUrl: './combine-last.component.html',
  styleUrls: ['./combine-last.component.scss']
})
export class CombineLastComponent implements AfterViewInit {

  // Sources
  nameSource = ['Anup', 'Shakhar', 'Sharma', 'Uxtrendz', 'Jhon', 'Alex', 'Robort', 'Sam']
  colorSource = ['red','green', 'blue', 'yellow', 'violet', 'purple', 'grey']


  // Template Refrence
  @ViewChild('name') name!:ElementRef
  @ViewChild('color') color!:ElementRef

  ngAfterViewInit(): void {

    // Observable
    const nameObs = fromEvent<any>(this.name.nativeElement,"change").pipe(map(event => event.target.value))
    const colorObs = fromEvent<any>(this.color.nativeElement,"change").pipe(map(event => event.target.value))

    // Ex - 01 CombineLatest

    combineLatest(nameObs, colorObs).subscribe(([name, color])=>{
      // console.log(name, color)
      this.createBox(name, color, 'elcontainer')
    })

    // Ex - 02 withLatestForm
    // Master nameObs
    // Slave colorObs

    nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name, color])=>{
      console.log(name, color)
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
