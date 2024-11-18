import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/home/home.component';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';
import { config } from './app/app.config.server';
import {GioiThieuComponent} from './app/gioi-thieu/gioi-thieu.component'
import {DieuKhienComponent} from './app/dieu-khien/dieu-khien.component'
import {AdminComponent} from './app/admin_quan_ly_tour/admin.component'
import {QuanLyTourComponent} from './app/quan-ly-tour/quan-ly-tour.component'
const bootstrap = () => bootstrapApplication(DieuKhienComponent, config);

export default bootstrap;