import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDFormComponent } from './components/template-dform/template-dform.component';
import { ReactiveDformComponent } from './components/reactive-dform/reactive-dform.component';
import { StructureDirectiveComponent } from './components/structure-directive/structure-directive.component';
import { PromiseComponent } from './components/promise/promise.component';

const routes: Routes = [
  {path:'TForm', component:TemplateDFormComponent},
  {path:'RForm', component:ReactiveDformComponent},
  {path:'sd', component:StructureDirectiveComponent},
  {path:'promise', component:PromiseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
