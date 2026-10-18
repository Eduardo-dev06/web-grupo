import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GrupoService } from '../grupo-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-grupo-cadastrar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './grupo-cadastrar.html',
  styleUrl: './grupo-cadastrar.css',
})
export class GrupoCadastrar {
  private readonly grupoService = inject(GrupoService);

  private readonly router = inject(Router);

  irParaListagem(): void {
    this.router.navigate(['/grupo-listar']);
  }

  grupo = {
    nome: '',
  };

  salvarGrupo() {
    if (!this.grupo.nome.trim()) {
      alert('Informe o nome do grupo!');
      return;
    }
    this.grupoService.salvarGrupo(this.grupo).subscribe({
      next: () => {
        alert('Grupo cadastrado com sucesso!');
        this.grupo.nome = '';
      },
      error: (erro: unknown) => {
        console.error('Erro ao cadastrar grupo:', erro);
        alert('Não foi possível cadastrar o grupo.');
      },
    });
  }
}
