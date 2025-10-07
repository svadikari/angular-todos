import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { authGuard } from './auth.guard';
import { CompanyComponent } from './about/company/company.component';
import { ContactComponent } from './about/contact/contact.component';

export const routes: Routes = [
    {path: "",component: HomeComponent, canActivate:[authGuard]},
    {path: "about",component: AboutComponent, 
        children: [
            {path: 'company', component: CompanyComponent},
            {path: 'contact', component: ContactComponent}
        ]
    },
    {path: "login", component: LoginComponent},
    {path: 'signup', component: SignupComponent}
];
