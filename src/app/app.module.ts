import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckingTypeComponent } from './checking-type/checking-type.component';
import { TypeAssertionComponent } from './type-assertion/type-assertion.component';
import { TypeArrayComponent } from './type-array/type-array.component';
import { EnumComponent } from './enum/enum.component';
import { InterfaceComponent } from './interface/interface.component';
import { BarrelsComponent } from './barrels/barrels.component';
import { ModelsComponent } from './models/models.component';
import { IntersectionTypeComponent } from './intersection-type/intersection-type.component';
import { AccessModifiersComponent } from './access-modifiers/access-modifiers.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckingTypeComponent,
    TypeAssertionComponent,
    TypeArrayComponent,
    EnumComponent,
    InterfaceComponent,
    BarrelsComponent,
    ModelsComponent,
    IntersectionTypeComponent,
    AccessModifiersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
