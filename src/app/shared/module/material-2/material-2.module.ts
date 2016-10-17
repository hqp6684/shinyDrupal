import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MaterialModule.forRoot()],
  declarations: [],
  exports: [MaterialModule, CommonModule
  ]
})
export class Material2Module { }
