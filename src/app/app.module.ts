import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './shared/banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventsComponent } from './events/events.component';
import { PlayerComponent } from './player/player.component';
import { MinistriesComponent } from './ministries/ministries.component';
import { CallUsComponent } from './call-us/call-us.component';
import { OurBlogComponent } from './our-blog/our-blog.component';
import { EndPageComponent } from './end-page/end-page.component';
import { DiretoriaComponent } from './diretoria/diretoria.component';
import { Player2Component } from './player2/player2.component';
import { RadioComponent } from './radio/radio.component';
import { BlogPostComponent } from './our-blog/blog-post/blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    AboutUsComponent,
    EventsComponent,
    PlayerComponent,
    MinistriesComponent,
    CallUsComponent,
    OurBlogComponent,
    EndPageComponent,
    DiretoriaComponent,
    Player2Component,
    RadioComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
