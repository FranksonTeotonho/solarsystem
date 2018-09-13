import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanetaModule } from './planeta/planeta.module';
import { HttpClientModule } from '@angular/common/http';
import { GalaxiaComponent } from './galaxia/galaxia.component';
import { ModuloRoteador } from './app.routes';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    GalaxiaComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PlanetaModule,
    ModuloRoteador
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
