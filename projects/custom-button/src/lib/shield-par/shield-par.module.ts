import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShieldParComponent } from './shield-par.component';



@NgModule({
  declarations: [ShieldParComponent],
  imports: [
    CommonModule
  ],
  exports: [ ShieldParComponent]
})
export class ShieldParModule { }
