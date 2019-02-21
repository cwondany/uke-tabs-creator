import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabCreationComponent } from './tab-creation/tab-creation.component';
import { TabOutputComponent } from './tab-output/tab-output.component';
import { ChordListComponent } from './tab-creation/chord-list/chord-list.component';
import { ToolBarComponent } from './tab-creation/tool-bar/tool-bar.component';
import { FretBarComponent } from './tab-creation/fret-bar/fret-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabCreationComponent,
    TabOutputComponent,
    ChordListComponent,
    ToolBarComponent,
    FretBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
