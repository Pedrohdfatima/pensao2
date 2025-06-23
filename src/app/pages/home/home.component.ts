import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioModel } from '../../models/usuarioModel';
import { ToastrService } from 'ngx-toastr';
import { AuditoriaService } from '../../services/auditoria.service';
import * as XLSX from 'xlsx' 
import { Router, RouterModule } from '@angular/router';
import { AutenticacaoService } from '../../services/autenticacao.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
    usuarios: UsuarioModel[] = []
    usuariosGeral: UsuarioModel[] = []


    constructor(private usuarioService: UsuarioService, private toastr: ToastrService, 
                private auditoriaService: AuditoriaService, private router: Router, 
                private autenticacaoService: AutenticacaoService){}

    ngOnInit(): void {
            this.usuarioService.BuscarUsuarios().subscribe(response => {
            this.usuarios = response.dados;
            this.usuariosGeral = response.dados;
        })
    }

    remover(id: number){

        this.usuarioService.RemoverUsuarios(id).subscribe(response => {

          if (response.dados != null){
              this.toastr.success(response.mensagem, "Sucesso!")
              this.usuarios = this.usuarios.filter(usuario => usuario.id !== id)
          }else{
              this.toastr.error(response.mensagem, "Erro!")
          }
        })
    }

    pesquisar(event: Event){

        const target = event.target as HTMLInputElement;
        const value = target.value.toLowerCase();

        this.usuarios = this.usuariosGeral.filter(usuario => {
          return usuario.nome.toLowerCase().includes(value);
        })
    }

    ExportarExcel(){
      this.auditoriaService.BuscarAuditoria().subscribe(auditor => {

          if(auditor.length > 0){
            const ws : XLSX.WorkSheet = XLSX.utils.json_to_sheet(auditor);
            const wb : XLSX.WorkBook = XLSX.utils.book_new();

            XLSX.utils.book_append_sheet(wb, ws, "Planilha de Dados");
            XLSX.writeFile(wb, "dados.xlsx")
          }else{
            this.toastr.error("Não existe auditorias cadastradas.", "Erro!")
          }
      })

    }

    deslogar(){
      this.autenticacaoService.Sair();
    }


}
