import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { Header1Component } from 'src/app/components/header1/header1.component';
import { KategoriComponent } from 'src/app/components/kategori/kategori.component';
import { NomorMejaComponent } from 'src/app/components/nomor-meja/nomor-meja.component';
import {ListMenuComponent} from 'src/app/components/list-menu/list-menu.component';
import { JumlahPesananButtonComponent } from 'src/app/components/jumlah-pesanan-button/jumlah-pesanan-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage, Header1Component, KategoriComponent, NomorMejaComponent, ListMenuComponent, JumlahPesananButtonComponent]
})
export class MenuPageModule {}