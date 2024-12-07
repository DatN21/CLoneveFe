import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component'; // Đảm bảo bạn đã import component này
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import {ThemMoiTourComponent} from './them-moi-tour/them-moi-tour.component'
import { QuanLyTourComponent } from './quan-ly-tour/quan-ly-tour.component';
import {QuanLyBookingComponent} from './quan-ly-booking/quan-ly-booking.component'
import {ThemAnhComponent} from './them-anh/them-anh.component'
import {SuaThongTinTourComponent} from './sua-thong-tin-tour/sua-thong-tin-tour.component'
import {TourDetailComponent} from './tour-detail/tour-detail.component'
import {ThongTinTaiKhoanComponent} from './thong-tin-tai-khoan/thong-tin-tai-khoan.component'
import {QuanLyTourDaDatComponent} from './quan-ly-tour-da-dat/quan-ly-tour-da-dat.component'
import { AdminComponent } from './admin_quan_ly_tour/admin.component';
import {QuanLyNguoiDungComponent} from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component'
import { AuthGuard } from './guards/auth.guard';
export const routes: Routes = [
    {
        path: 'gioi-thieu', // URL sẽ được sử dụng để điều hướng
        component: GioiThieuComponent // Component sẽ được hiển thị khi truy cập vào URL trên
    },
    // { path: '', component: HomeComponent },
    { path: 'dang-nhap', component: LoginComponent },
    { path: 'dang-ky', component: RegisterComponent },
        {
          path: 'admin',
          component: AdminComponent, 
          canActivate: [AuthGuard], // Admin layout
          children: [
            {
              path: '',  // Trang dashboard của Admin
              component: QuanLyTourComponent,  // Component của dashboard admin
            
            },
            {
              path: 'them-moi-tour',
              component: ThemMoiTourComponent,  // Component thêm tour
            },
            {
              path: 'quan-ly-booking',
              component: QuanLyBookingComponent,  // Trang quản lý booking
            },
            {
              path: 'quan-ly-nguoi-dung',
              component: QuanLyNguoiDungComponent,  // Trang quản lý booking
            },
            {
              path: 'edit-tour/:id',
              component: SuaThongTinTourComponent,  // Component chỉnh sửa tour
            },
            {
              path: 'app-quan-ly-tour',
              component: QuanLyTourComponent,  // Trang quản lý tour
            },
            { path: 'them-anh/:id', component: ThemAnhComponent },
        ]
        },
        // Các route khác nếu có
      
      

    { path: '', component: HomeComponent },

    { path: 'tour-detail/:id', component: TourDetailComponent },
    {path: 'thong-tin-tai-khoan', component: ThongTinTaiKhoanComponent},
    {path: 'quan-ly-tour-da-dat', component: QuanLyTourDaDatComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}