import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './components/master/master.component';

import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './components/main/main.component';
import { HeaderTopComponent } from './components/header/header-top/header-top.component';
import { HeaderMiddleComponent } from './components/header/header-middle/header-middle.component';
import { FooterTopComponent } from './components/footer/footer-top/footer-top.component';
import { FooterBottomComponent } from './components/footer/footer-bottom/footer-bottom.component';
import { MasterDirective } from './directives/master.directive';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderBottomComponent } from './components/header/header-bottom/header-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    MenuComponent,
    MainComponent,
    HeaderTopComponent,
    HeaderMiddleComponent,
    HeaderBottomComponent,
    FooterTopComponent,
    FooterBottomComponent,
    HeaderComponent,
    FooterComponent,
    MasterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
