import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpModule } from 'ngx-countup';
import { NgApexchartsModule } from "ng-apexcharts";
import { materialModule } from './material.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxBootstrapModule } from './ngx-bootstrap/ngx-bootstrap.module';
import { NgxEditorModule } from 'ngx-editor';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LightboxModule } from 'ngx-lightbox';
import {
  BsDatepickerModule,
  BsDatepickerConfig,
} from 'ngx-bootstrap/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import {MatTooltipModule} from '@angular/material/tooltip';
import { LightgalleryModule } from 'lightgallery/angular'; 
import { NgxSliderModule } from '@angular-slider/ngx-slider';


@NgModule({ declarations: [],
    exports: [
        CommonModule,
        NgxBootstrapModule,
        CarouselModule,
        // NgxSliderModule,
        SlickCarouselModule,
        CountUpModule,
        BsDatepickerModule,
        NgApexchartsModule,
        materialModule,
        FullCalendarModule,
        MatSortModule,
        FormsModule,
        ReactiveFormsModule,
        NgxEditorModule,
        LightboxModule,
        MatSliderModule,
        NgxMatIntlTelInputComponent,
        MatTooltipModule,
        LightgalleryModule
    ], imports: [CommonModule,
        NgxBootstrapModule,
        CarouselModule,
        // NgxSliderModule,
        SlickCarouselModule,
        CountUpModule,
        NgApexchartsModule,
        materialModule,
        FullCalendarModule,
        MatSortModule,
        FormsModule,
        ReactiveFormsModule,
        BsDatepickerModule.forRoot(),
        NgxEditorModule,
        LightboxModule,
        MatSliderModule,
        NgxMatIntlTelInputComponent,
        MatTooltipModule,
        LightgalleryModule], providers: [
        BsDatepickerConfig,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class SharedModule { }
