import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ExercicioDataDatabindingComponent } from './exercicio-data-databinding/exercicio-data-databinding.component';
import { ExercicioContadorComponent } from './exercicio-contador/exercicio-contador.component';
import { EerciciosDiretivasComponent } from './eercicios-diretivas/eercicios-diretivas.component';
import { ExercicioNgclassComponent } from './exercicio-ngclass/exercicio-ngclass.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ExercicioDataDatabindingComponent,
    ExercicioContadorComponent,
    EerciciosDiretivasComponent,
    ExercicioNgclassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
