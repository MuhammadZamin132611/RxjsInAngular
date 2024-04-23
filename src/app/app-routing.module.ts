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
import { ConcatComponent } from './observable/concat/concat.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { ConcatMap2Component } from './observable/concat-map2/concat-map2.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { SwitchMap2Component } from './observable/switch-map2/switch-map2.component';
import { ExhaustMapComponent } from './observable/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './observable/share-replay/share-replay.component';


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
    {path: 'concat', component:ConcatComponent},
    {path: 'merge', component:MergeComponent},
    {path: 'merge-map', component:MergeMapComponent},
    {path: 'concat-map', component:ConcatMapComponent},
    {path: 'concat-map2', component:ConcatMap2Component},
    {path: 'switchMap', component:SwitchMapComponent},
    {path: 'switchMap2', component:SwitchMap2Component},
    {path: 'exhaustMap', component:ExhaustMapComponent},
    {path: 'shareReplay', component:ShareReplayComponent},
  ]},
  {path: '**', redirectTo:'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
