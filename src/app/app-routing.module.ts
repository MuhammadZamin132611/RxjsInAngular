import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoiseComponent } from './promoise/promoise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';


const routes: Routes = [
  {path: 'promise', component: PromoiseComponent},
  {path: 'observable', component: ObservableComponent, children:[
    {path: '', component:ListComponent},
    {path: 'from-event', component:FromEventComponent},
    {path: 'interval', component:IntervalComponent},
    {path: 'of-from', component:OfFromComponent},
    {path: 'to-array', component:ToArrayComponent},
    {path: 'custom', component:CustomComponent},
  ]},
  {path: '**', redirectTo:'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
