import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ThemeModule } from '../theme/theme.module';



@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ThemeModule
  ],
  exports: [
    HomeComponent,
    MainComponent
  ]
})
export class SharedModule { }
