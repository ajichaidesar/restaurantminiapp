import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailmenuPageRoutingModule } from './detailmenu-routing.module';

import { DetailmenuPage } from './detailmenu.page';
import { Header2Component } from 'src/app/components/header2/header2.component';
import { HeroDetailmenuComponent } from 'src/app/components/herodetailmenu/herodetailmenu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailmenuPageRoutingModule
  ],
  declarations: [DetailmenuPage, Header2Component, HeroDetailmenuComponent]
})
export class DetailmenuPageModule {}
