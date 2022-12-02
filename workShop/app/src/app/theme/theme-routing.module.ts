import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "../shared/main/main.component";
import { ThemeListComponent } from "./theme-list/theme-list.component";

const routes: Routes = [{
    path: 'themes',
    component: MainComponent
},
]

export const ThemeRoutingModule = RouterModule.forChild(routes);