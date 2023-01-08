import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// MATERIAL ANGULAR.IO
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainPageComponent } from './Components/main-page/main-page.component';
import { BannerTitleComponent } from './Components/banner-title/banner-title.component';
import { BannerLogoComponent } from './Components/banner-logo/banner-logo.component';
import { FormComponent } from './Components/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoxMediaComponent } from './Components/form/box-media/box-media.component';
import { MatCardModule } from '@angular/material/card';
import { BoxMediaFinalComponent } from './Components/form/box-media-final/box-media-final.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BannerTitleComponent,
    BannerLogoComponent,
    FormComponent,
    BoxMediaComponent,
    BoxMediaFinalComponent
  ],
  imports: [
    MatToolbarModule,
MatIconModule,
MatButtonModule, 
MatGridListModule, 
MatFormFieldModule, 
MatSelectModule, 
MatSidenavModule, 
MatRadioModule,
MatTableModule,
MatPaginatorModule, 
 MatSortModule ,
MatInputModule ,
MatCardModule,
MatDatepickerModule, 
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
