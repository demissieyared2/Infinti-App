import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {NgbModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeaderComponent} from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {DateAgoPipe} from './pipes/date-ago.pipe';
import {FooterComponent} from './components/footer/footer.component';
import {PermissionComponent} from './components/permission/permission.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdminComponent} from './components/admin/admin.component';
import {AdminSettingsComponent} from './components/admin/admin-settings/admin-settings.component';
import {AdminUsersComponent} from './components/admin/admin-users/admin-users.component';
import {AdminEmailSettingsComponent} from './components/admin/admin-email-settings/admin-email-settings.component';
import {ProfileComponent} from './components/profile/profile.component';
import {UserInfoComponent} from './components/profile/user-info/user-info.component';
import {UserGroupsComponent} from './components/profile/user-groups/user-groups.component';
import {CreateGroupModalComponent} from './components/profile/create-group-modal/create-group-modal.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {MiniPagerComponent} from './components/widgets/mini-pager/mini-pager.component';
import {UserResolver} from './user.resolver';
import {ConfigComponent} from './components/config/config.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {ConfirmActionComponent} from './components/widgets/confirm-action/confirm-action.component';
import {SurveyComponent} from './components/nurse/survey/survey.component';
import {CreateUserComponent} from './components/admin/admin-users/create-user/create-user.component';
import {DistrictsComponent} from "./components/admin/sites/districts.component";
import {ModalCreateDistrictComponent} from './components/admin/sites/modal-create-district/modal-create-district.component';
import {SelectDistrictComponent} from './components/nurse/survey/questions/select-district/select-district.component';
import {IncidentComponent} from './components/nurse/incident/incident.component';
import {AdminSchoolsComponent} from './components/admin/admin-schools/admin-schools.component';
import {ModalCreateSchoolComponent} from './components/admin/admin-schools/modal-create-school/modal-create-school.component';
import {ReportsComponent} from './components/reports/reports.component';
import {ModalUploadUsersComponent} from './components/admin/admin-users/modal-upload-users/modal-upload-users.component';
import {HygieneComponent} from './components/nurse/hygiene/hygiene.component';
import {GlovesComponent} from './components/nurse/gloves/gloves.component';
import {ModalUploadSchoolsComponent} from './components/admin/sites/modal-upload-schools/modal-upload-schools.component';
import {ProfileDetailsResolver} from "./components/profile/profile.details.resolver";
import {ComponentsComponent} from './components/components.component';
import {HygieneReportsComponent} from './components/reports/hygiene-reports/hygiene-reports.component';
import {IncidentReportsComponent} from './components/reports/incident-reports/incident-reports.component';
import {GloveReportsComponent} from './components/reports/glove-reports/glove-reports.component';
import {SurveyReportsComponent} from './components/reports/survey-reports/survey-reports.component';
import {ConfirmComponent} from './components/common/confirm/confirm.component';
import {RegisterComponent} from './components/register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        HeaderComponent,
        DateAgoPipe,
        FooterComponent,
        PermissionComponent,
        AdminComponent,
        AdminSettingsComponent,
        AdminUsersComponent,
        AdminEmailSettingsComponent,
        ProfileComponent,
        UserInfoComponent,
        UserGroupsComponent,
        CreateGroupModalComponent,
        ForgotPasswordComponent,
        MiniPagerComponent,
        ConfigComponent,
        ResetPasswordComponent,
        ConfirmActionComponent,
        SurveyComponent,
        CreateUserComponent,
        DistrictsComponent,
        ModalCreateDistrictComponent,
        SelectDistrictComponent,
        IncidentComponent,
        AdminSchoolsComponent,
        ModalCreateSchoolComponent,
        ReportsComponent,
        ModalUploadUsersComponent,
        HygieneComponent,
        GlovesComponent,
        ModalUploadSchoolsComponent,
        ComponentsComponent,
        HygieneReportsComponent,
        IncidentReportsComponent,
        GloveReportsComponent,
        SurveyReportsComponent,
        ConfirmComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgbModule,
        NgbNavModule,
        HttpClientModule,
        NgxChartsModule,
        BrowserAnimationsModule
    ],
    providers: [UserResolver, ProfileDetailsResolver],
    bootstrap: [AppComponent]
})
export class AppModule {
}