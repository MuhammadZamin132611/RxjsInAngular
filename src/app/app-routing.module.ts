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
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapOperatorComponent } from './observable/tap-operator/tap-operator.component';
import { TakeOperatorComponent } from './observable/take-operator/take-operator.component';
import { RetryOperatorComponent } from './observable/retry-operator/retry-operator.component';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';


const routes: Routes = [
  {path: 'promise', component: PromoiseComponent},
  {path: 'observable', component: ObservableComponent, children:[
    {path: '', component:ListComponent},
    {path: 'from-event', component:FromEventComponent},
    {path: 'interval', component:IntervalComponent},
    {path: 'of-from', component:OfFromComponent},
    {path: 'to-array', component:ToArrayComponent},
    {path: 'custom', component:CustomComponent},
    {path: 'map', component:MapComponent},
    {path: 'pluck', component:PluckComponent},
    {path: 'filter', component:FilterComponent},
    {path: 'tap-operator', component:TapOperatorComponent},
    {path: 'take-operator', component:TakeOperatorComponent},
    {path: 'retry-operator', component:RetryOperatorComponent},
    {path: 'debounce-time', component:DebounceTimeComponent},
    {path: 'subject', component:SubjectComponent},
    {path: 'replay-subject', component:ReplaySubjectComponent},
    {path: 'async-subject', component:AsyncSubjectComponent},
  ]},
  {path: '**', redirectTo:'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
