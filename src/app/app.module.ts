import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layouts/layout/layout.component";
import { DiagramLayoutComponent } from "./layouts/diagram-layout/diagram-layout.component";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutComponent,
        DiagramLayoutComponent
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { } 
