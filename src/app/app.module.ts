import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlertsComponent } from './views/alerts/alerts.component';
import { DetailsComponent } from './views/details/details.component';
import { ControlsComponent } from './components/controls/controls.component';
import { CardComponent } from './components/card/card.component';
import { BgColorDirective } from './directives/bg-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlertsComponent,
    DetailsComponent,
    ControlsComponent,
    CardComponent,
    BgColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
