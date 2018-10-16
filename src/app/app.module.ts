import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSidenavModule,
        MatDialogModule,
        MatCheckboxModule,
        MatCardModule
      } from '@angular/material';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { ContactComponent } from './contact/contact.component';
import { DialogComponent } from './ui/dialog/dialog.component';
import { SubscribeComponent } from './ui/subscribe/subscribe.component';
import { ChatComponent } from './ui/chat/chat.component';

library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventComponent,
    ContactComponent,
    DialogComponent,
    SubscribeComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    MatCheckboxModule,
    MatCardModule,

    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    DialogComponent,
    SubscribeComponent,
    ChatComponent
  ]
})
export class AppModule { }
