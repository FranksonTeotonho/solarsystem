
import { Routes, RouterModule} from "@angular/router"
import { GalaxiaComponent } from "./galaxia/galaxia.component";
import { CadastrarComponent } from "./cadastrar/cadastrar.component";

const rotasApp:Routes = [
    {path: '', component: GalaxiaComponent},
    {path: 'cadastrar', component: CadastrarComponent}
    {path: '**', redirectTo: ''}
]

export const ModuloRoteador = RouterModule.forRoot(rotasApp)