import { Component, OnInit } from '@angular/core';
import { delay, from, mergeMap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-concat-map2',
  templateUrl: './concat-map2.component.html',
  styleUrls: ['./concat-map2.component.scss']
})
export class ConcatMap2Component implements OnInit {

  constructor(private du: DesignUtilityService) { }

  notifyData = [
    {
      name: 'Whatsap',
      icon: 'assets/whatsapp-icon.png',
      time: '4 Second Ago.',
      img: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      strong: 'Alex Johnson',
      p: 'Commented on your #Uxtrendz Post: Awesom Post !!!! thaks..'
    },
    {
      name: 'Facebook',
      icon: 'assets/img.icons8.png',
      time: '3 Second Ago.',
      img: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      strong: 'Jhon Johnson',
      p: 'Commented on your #Uxtrendz Post: Awesom Post !!!! thaks..'
    },
    {
      name: 'Whatsap',
      icon: 'assets/whatsapp-icon.png',
      time: '2 Second Ago.',
      img: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      strong: 'Smith Johnson',
      p: 'Commented on your #Uxtrendz Post: Awesom Post !!!! thaks..'
    },
    {
      name: 'Facebook',
      icon: 'assets/img.icons8.png',
      time: '1 Second Ago.',
      img: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      strong: 'Ibrahim Johnson',
      p: 'Commented on your #Uxtrendz Post: Awesom Post !!!! thaks..'
    },
  ];

  ngOnInit(): void {

    from(this.notifyData).pipe(
     delay(2000)
    )
    .subscribe(res => {
      console.log(res)
      this.du.print2(this.getHtml(res), 'elContainer')
    })

  }

  getHtml(data:any) {
   return `<div class="item">
    <div class="header">
        <div class="app">
            <img src="${data.icon}" width="20">${data.name}
        </div>
        <div class="time">${data.time}</div>
    </div>
    <div class="body1">
        <img width="50" height="50"
            src="${data.img}"
            class="item-img">
        <strong>${data.strong}</strong>
        <p>${data.p}</p>
    </div>
  </div>`
  }


}

