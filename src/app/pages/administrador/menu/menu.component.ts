import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../enviroments/enviroments';
import Swal from 'sweetalert2';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ModuloService } from '../../../services/modulo.service';
import { ModuloComponent } from './modulo.component';
import { PerfilesComponent } from "./perfiles.component";
import { MenuPerfilComponent } from "./menu-perfil.component";
import { AsignacionMenuPerfilComponent } from './asignacion-menu-perfil.component';

@Component({
  selector: 'app-menu',
  imports: [ModuloComponent, PerfilesComponent, MenuPerfilComponent, AsignacionMenuPerfilComponent],
  templateUrl: './menu.component.html',
  styles: ``,
})
export class MenuComponent {
  @ViewChild(ModuloComponent) moduloComponent!: ModuloComponent;
  @ViewChild(PerfilesComponent) perfilComponent!: PerfilesComponent;
  @ViewChild(MenuPerfilComponent) menuOpcionesComponent!: MenuPerfilComponent;
  @ViewChild(AsignacionMenuPerfilComponent) asignacionMenuPerfilComponent!: AsignacionMenuPerfilComponent;

  constructor() {}

  tabSeleccionado(tab: string) {
    if (tab === 'modulo' && this.moduloComponent) {      
      this.moduloComponent.getModulos();
    }
    else if (tab === 'perfil' && this.perfilComponent) {      
      this.perfilComponent.inicializacion();
    }
    else if (tab === 'menu' && this.menuOpcionesComponent) {      
      this.menuOpcionesComponent.inicializacion();
    }
    else if (tab === 'asignaciones' && this.asignacionMenuPerfilComponent) {      
      this.asignacionMenuPerfilComponent.inicializacion();
    }
  }
}
