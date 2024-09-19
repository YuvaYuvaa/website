import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionComponent } from './section/section.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
import { CarFeaturesComponent } from './car-features/car-features.component';
import { BikeAnimationComponent } from './bike-animation/bike-animation.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionComponent,
    FeaturesSectionComponent,
    CarFeaturesComponent,
    BikeAnimationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
