import { NgModule } from '@angular/core';
import { MenuPageRoutingModule } from './menu-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';
import { MenuController } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MenuPageRoutingModule],
  declarations: [MenuPage]
})
export class MenuPageModule {
  constructor(private menu: MenuController) {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    // this.menu.swipeGesture(false, 'end');
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
