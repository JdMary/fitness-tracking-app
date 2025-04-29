import { NgModule } from '@angular/core';
import { VideoUploadComponent } from './video-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { S } from '@angular/cdk/keycodes';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [

    VideoUploadComponent
    ],
  exports: [
    VideoUploadComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    NgModule


  ]
})
export class VideoUploadModule { }
