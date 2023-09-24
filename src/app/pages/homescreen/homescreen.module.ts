import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomescreenPageRoutingModule } from './homescreen-routing.module';

import { HomescreenPage } from './homescreen.page';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { LogoheroComponent } from 'src/app/components/logohero/logohero.component';
import { InfoBisnisComponent } from 'src/app/components/info-bisnis/info-bisnis.component';
import { ButtonMenuComponent } from 'src/app/components/button-menu/button-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomescreenPageRoutingModule
  ],
  declarations: [
    HomescreenPage, 
    HeroComponent,
    LogoheroComponent,
    InfoBisnisComponent,
    ButtonMenuComponent
  ]
})
export class HomescreenPageModule {}
