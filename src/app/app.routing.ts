import{ Routes, RouterModule} from "@angular/router"

import{ CrearComponent} from "./components/crear/crear.component";
import { ListarComponent} from "./components/listar/listar.component";

const appRoutes: Routes= [
    {path:"", component: CrearComponent},
    {path:"crear", component:CrearComponent},
    {path:"listar", component:ListarComponent},
];

export const routing = RouterModule.forRoot(appRoutes) 