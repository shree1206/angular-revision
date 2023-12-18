import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSubtitleDirective } from './directive/app-subtitle.directive';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { StructureDirectiveComponent } from './components/structure-directive/structure-directive.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { TemplateDFormComponent } from './components/template-dform/template-dform.component';
import { ReactiveDformComponent } from './components/reactive-dform/reactive-dform.component';
import { PromiseComponent } from './components/promise/promise.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSubtitleDirective,
    ParentComponent,
    ChildComponent,
    StructureDirectiveComponent,
    TemplateDFormComponent,
    ReactiveDformComponent,
    PromiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
