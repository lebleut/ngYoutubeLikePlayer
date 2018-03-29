import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerWatchComponent } from './player-watch/player-watch.component';
import { PlayerMetaComponent } from './player-meta/player-meta.component';
import { RelatedComponent } from './related/related.component';
import { RelatedItemComponent } from './related-item/related-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerWatchComponent,
    PlayerMetaComponent,
    RelatedComponent,
    RelatedItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
