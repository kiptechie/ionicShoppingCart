import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CartModalPageModule } from './cart-modal/cart-modal.module';
import { PopOverComponent } from './components/pop-over/pop-over.component';

import { CallNumber } from '@ionic-native/call-number/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@NgModule({
  declarations: [AppComponent, PopOverComponent],
  entryComponents: [PopOverComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  CartModalPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CallNumber,
    SocialSharing
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
