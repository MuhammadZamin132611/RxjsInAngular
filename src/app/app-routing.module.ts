import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoiseComponent } from './promoise/promoise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';


const routes: Routes = [
  {path: 'promise', component: PromoiseComponent},
  {path: 'observable', component: ObservableComponent, children:[
    {path: '', component:ListComponent},
    {path: 'from-event', component:FromEventComponent},
    {path: 'interval', component:IntervalComponent},
  ]},
  {path: '**', redirectTo:'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
