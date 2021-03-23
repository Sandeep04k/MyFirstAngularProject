import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JavaComponent } from './java/java.component';
import { WebComponent } from './web/web.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductcompComponent } from './productcomp/productcomp.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { SearchpipePipe } from './searchpipe.pipe';
import { SortpipePipe } from './sortpipe.pipe';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { MydirtDirective } from './mydirt.directive';
import { HomeComponent } from './home/home.component';
import { TempDrivenFormcompComponent } from './temp-driven-formcomp/temp-driven-formcomp.component';
import { AdvjavaComponent } from './advjava/advjava.component';
import { CorejavaComponent } from './corejava/corejava.component';
import { ModelDrivenFormcompComponent } from './model-driven-formcomp/model-driven-formcomp.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewComponent } from './review/review.component';
import { CourseComponent } from './course/course.component';
import { TechComponent } from './tech/tech.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { AngularComponent } from './angular/angular.component';
import { PythonComponent } from './python/python.component';
import { LoginComponent } from './login/login.component';
import { PassComponent } from './pass/pass.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';




export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/lang/','.json')
}
@NgModule({
  declarations: [
    AppComponent,
    JavaComponent,
    WebComponent,
    ProductcompComponent,
    EmpdetailsComponent,
    SearchpipePipe,
    SortpipePipe,
    MydirtDirective,
    HomeComponent,
    TempDrivenFormcompComponent,
    AdvjavaComponent,
    CorejavaComponent,
    ModelDrivenFormcompComponent,
    HeaderComponent,
    FooterComponent,
    ReviewComponent,
    CourseComponent,
    TechComponent,
    RegistrationComponent,
    ContactComponent,
    AngularComponent,
    PythonComponent,
    LoginComponent,
    PassComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
