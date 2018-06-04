import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { NgSwipeToDeleteModule } from 'ng-swipe-to-delete';

import { MyHammerConfig } from './config/hammer-gesture-config';
import { MaterialsModule } from './modules/materials.module';

import { AppComponent } from './app.component';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialsModule,
		NgSwipeToDeleteModule
	],
	providers: [{
			provide: HAMMER_GESTURE_CONFIG,
			useClass: MyHammerConfig
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
