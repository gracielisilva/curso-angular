import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { EerciciosDiretivasComponent } from './shared/components/eercicios-diretivas/eercicios-diretivas.component';
import { ExercicioContadorComponent } from './shared/components/exercicio-contador/exercicio-contador.component';
import {
  ExercicioDataDatabindingComponent,
} from './shared/components/exercicio-data-databinding/exercicio-data-databinding.component';
import { ExercicioNgclassComponent } from './shared/components/exercicio-ngclass/exercicio-ngclass.component';
import { ExercicioPipesComponent } from './shared/components/exercicio-pipes/exercicio-pipes.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

registerLocaleData(localePt, 'pt');

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
    ExercicioPipesComponent,
    ExtratoComponent,
    LoginComponent,
    NaoEncontradoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
function newFunction() {
  registerLocaleData(localePt, 'pt');
}

