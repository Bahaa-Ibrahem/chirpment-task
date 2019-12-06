import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { FileSelectDirective } from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './ViewModels/product/product.component';
import { HeaderComponent } from './LayoutComponent/header/header.component';
import { NotfoundComponent } from './LayoutComponent/notfound/notfound.component';
import { ProductService } from './Services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './LayoutComponent/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    NotfoundComponent,
    FileSelectDirective,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
