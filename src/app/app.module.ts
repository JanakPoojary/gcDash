import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule} from '@angular/fire/database'
import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { ImageComponent } from './image/image.component';
import { HomeComponent } from './home/home.component';
import { TotalComponent } from './total/total.component';
import { LiveComponent } from './live/live.component';
import { BarchartComponent } from './barchart/barchart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    ImageComponent,
    HomeComponent,
    TotalComponent,
    LiveComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
