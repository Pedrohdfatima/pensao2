export interface UsuarioModel {
  id: number;
  usuario: string; // Corrigido de 'nome' para 'usuario'
  sobrenome: string;
  email: string;
  ativo: boolean;
  cargo: string;
  dataCriacao: string;
  dataAlteracao: string;
  token?: string; // Token é opcional, geralmente não vem em listas
}